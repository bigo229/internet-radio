import { DEMO_TRACKS } from './tracks';
import type { Station } from '../config';

export interface StationNowPlaying {
	artist: string;
	title: string;
	artwork?: string;
	requestsEnabled: boolean;
	isOnline: boolean;
	history: { artist: string; title: string; at: string }[];
}

export interface RequestableSong {
	request_id: string;
	title: string;
	artist: string;
	art?: string;
}

function stationApiUrl(station: Station, path: string): string {
	const base = station.azuraBase.replace(/\/+$/, '');
	return `${base}/api/${path}`;
}

/** Normalised now-playing for a station, with a demo fallback when offline. */
export async function fetchNowPlaying(station: Station): Promise<StationNowPlaying> {
	const fallback = demoNowPlaying(station);
	try {
		const res = await fetch(
			stationApiUrl(station, `nowplaying/${station.azuraStation}`),
			{
				cache: 'no-store',
				headers: station.apiKey ? { 'X-API-Key': station.apiKey } : {},
			}
		);
		if (!res.ok) return fallback;
		const d = (await res.json()) as any;
		const song = d.now_playing?.song ?? {};
		const history = (d.song_history ?? [])
			.map((h: any) => ({
				artist: h.song?.artist ?? '',
				title: h.song?.title ?? '',
				at: new Date((h.played_at ?? 0) * 1000).toISOString(),
			}))
			.filter((x: any) => x.artist || x.title);
		return {
			artist: song.artist ?? fallback.artist,
			title: song.title ?? fallback.title,
			artwork: song.art ?? undefined,
			requestsEnabled: !!d.requests_enabled,
			isOnline: d.is_online !== false,
			history,
		};
	} catch {
		return fallback;
	}
}

function demoNowPlaying(station: Station): StationNowPlaying {
	const n = DEMO_TRACKS.length;
	const offset = [...station.id].reduce((a, c) => a + c.charCodeAt(0), 0) % n;
	const i = (Math.floor(Date.now() / 30000) + offset) % n;
	const t = DEMO_TRACKS[i];
	const rotated = DEMO_TRACKS.map((_, k) => DEMO_TRACKS[(k + offset) % n]);
	const history = rotated
		.slice()
		.reverse()
		.map((x, idx) => ({
			artist: x.artist,
			title: x.title,
			at: new Date(Date.now() - (idx + 1) * 30000).toISOString(),
		}));
	return {
		artist: t.artist,
		title: t.title,
		requestsEnabled: true,
		isOnline: true,
		history,
	};
}

/** Search a station's requestable song library (AzuraCast request API). */
export async function searchRequests(station: Station, query: string): Promise<RequestableSong[]> {
	try {
		if (!station.apiKey) return demoRequests(query);
		const res = await fetch(
			stationApiUrl(
				station,
				`station/${station.azuraStation}/requests?query=${encodeURIComponent(query)}`
			),
			{ headers: { 'X-API-Key': station.apiKey } }
		);
		if (!res.ok) return demoRequests(query);
		const data = (await res.json()) as any[];
		return (data ?? []).map((r: any) => ({
			request_id: String(r.request_id),
			title: r.song?.title ?? '',
			artist: r.song?.artist ?? '',
			art: r.song?.art ?? undefined,
		}));
	} catch {
		return demoRequests(query);
	}
}

/** Submit a song request to a station (AzuraCast request API). */
export async function submitRequest(
	station: Station,
	requestId: string
): Promise<{ ok: boolean; message?: string; error?: string }> {
	if (!station.apiKey) {
		return {
			ok: true,
			message: 'Request received (demo mode - add an AzuraCast API key to go live).',
		};
	}
	try {
		const res = await fetch(
			stationApiUrl(station, `station/${station.azuraStation}/requests`),
			{
				method: 'POST',
				headers: { 'content-type': 'application/json', 'X-API-Key': station.apiKey },
				body: JSON.stringify({ request_id: requestId }),
			}
		);
		const data = (await res.json().catch(() => ({}))) as any;
		if (!res.ok) return { ok: false, error: data?.error ?? 'Request failed.' };
		return { ok: true, message: data?.message ?? 'Requested!' };
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : 'Request failed.' };
	}
}

function demoRequests(query: string): RequestableSong[] {
	const q = query.trim().toLowerCase();
	return DEMO_TRACKS.filter(
		(t) => !q || t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q)
	).map((t, i) => ({ request_id: `demo-${i}`, title: t.title, artist: t.artist }));
}
