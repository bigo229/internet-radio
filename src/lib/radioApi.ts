// src/lib/radioApi.ts
import { DEMO_TRACKS } from './tracks';
import type { Station } from '../config'; 

export interface StationNowPlaying {
	artist: string;
	title: string;
	artwork?: string;
	requestsEnabled: boolean;
	isOnline: boolean;
	history: { artist: string; title: string; at: string; artwork: string }[];
} 

function stationApiUrl(station: Station, path: string): string {
	const base = station.azuraBase.replace(/\/+$/, '');
	return `${base}/api/${path}`;
} 

export async function fetchNowPlaying(station: Station): Promise<StationNowPlaying> {
	const fallback = demoNowPlaying(station);
	try {
		// 🟢 ZERO-KEY FETCH: Fetches public player updates without requiring an API secret key
		const res = await fetch(
			stationApiUrl(station, `nowplaying/${encodeURIComponent(station.azuraStation)}`),
			{ cache: 'no-store' }
		);
		if (!res.ok) return fallback;
		const d = (await res.json()) as any;
		const song = d.now_playing?.song ?? {}; 

		const history = (d.song_history ?? [])
			.map((h: any) => ({
				artist: h.song?.artist ?? '',
				title: h.song?.title ?? '',
				at: new Date((h.played_at ?? 0) * 1000).toISOString(),
				artwork: h.song?.art || h.song?.artwork || '/images/default-cover.jpg',
			}))
			.filter((x: any) => x.artist || x.title);

		return {
			artist: song.artist ?? fallback.artist,
			title: song.title ?? fallback.title,
			artwork: song.art || song.artwork || '/images/default-cover.jpg',
			requestsEnabled: !!d.requests_enabled,
			isOnline: d.is_online !== false,
			history,
		};
	} catch (error) {
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
			artwork: '/images/default-cover.jpg'
		}));
	return {
		artist: t.artist,
		title: t.title,
		requestsEnabled: true,
		isOnline: true,
		history,
	};
}
