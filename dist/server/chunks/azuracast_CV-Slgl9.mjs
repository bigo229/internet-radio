//#region src/lib/tracks.ts
/** Default demo playlist used when no live now-playing source is configured. */
var DEMO_TRACKS = [
	{
		artist: "Tame Impala",
		title: "The Less I Know The Better"
	},
	{
		artist: "ODESZA",
		title: "A Moment Apart"
	},
	{
		artist: "Bonobo",
		title: "Kerala"
	},
	{
		artist: "Khruangbin",
		title: "Time (You and I)"
	},
	{
		artist: "Tycho",
		title: "Awake"
	},
	{
		artist: "Caribou",
		title: "Can't Do Without You"
	},
	{
		artist: "Four Tet",
		title: "Teenage Birdsong"
	}
];
//#endregion
//#region src/lib/azuracast.ts
function stationApiUrl(station, path) {
	return `${station.azuraBase.replace(/\/+$/, "")}/api/${path}`;
}
/** Normalised now-playing for a station, with a demo fallback when offline. */
async function fetchNowPlaying(station) {
	const fallback = demoNowPlaying(station);
	try {
		const res = await fetch(stationApiUrl(station, `nowplaying/${station.azuraStation}`), {
			cache: "no-store",
			headers: station.apiKey ? { "X-API-Key": station.apiKey } : {}
		});
		if (!res.ok) return fallback;
		const d = await res.json();
		const song = d.now_playing?.song ?? {};
		const history = (d.song_history ?? []).map((h) => ({
			artist: h.song?.artist ?? "",
			title: h.song?.title ?? "",
			at: (/* @__PURE__ */ new Date((h.played_at ?? 0) * 1e3)).toISOString()
		})).filter((x) => x.artist || x.title);
		return {
			artist: song.artist ?? fallback.artist,
			title: song.title ?? fallback.title,
			artwork: song.art ?? void 0,
			requestsEnabled: !!d.requests_enabled,
			isOnline: d.is_online !== false,
			history
		};
	} catch {
		return fallback;
	}
}
function demoNowPlaying(station) {
	const n = DEMO_TRACKS.length;
	const offset = [...station.id].reduce((a, c) => a + c.charCodeAt(0), 0) % n;
	const t = DEMO_TRACKS[(Math.floor(Date.now() / 3e4) + offset) % n];
	const history = DEMO_TRACKS.map((_, k) => DEMO_TRACKS[(k + offset) % n]).slice().reverse().map((x, idx) => ({
		artist: x.artist,
		title: x.title,
		at: (/* @__PURE__ */ new Date(Date.now() - (idx + 1) * 3e4)).toISOString()
	}));
	return {
		artist: t.artist,
		title: t.title,
		requestsEnabled: true,
		isOnline: true,
		history
	};
}
/** Search a station's requestable song library (AzuraCast request API). */
async function searchRequests(station, query) {
	try {
		if (!station.apiKey) return demoRequests(query);
		const res = await fetch(stationApiUrl(station, `station/${station.azuraStation}/requests?query=${encodeURIComponent(query)}`), { headers: { "X-API-Key": station.apiKey } });
		if (!res.ok) return demoRequests(query);
		return (await res.json() ?? []).map((r) => ({
			request_id: String(r.request_id),
			title: r.song?.title ?? "",
			artist: r.song?.artist ?? "",
			art: r.song?.art ?? void 0
		}));
	} catch {
		return demoRequests(query);
	}
}
/** Submit a song request to a station (AzuraCast request API). */
async function submitRequest(station, requestId) {
	if (!station.apiKey) return {
		ok: true,
		message: "Request received (demo mode - add an AzuraCast API key to go live)."
	};
	try {
		const res = await fetch(stationApiUrl(station, `station/${station.azuraStation}/requests`), {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"X-API-Key": station.apiKey
			},
			body: JSON.stringify({ request_id: requestId })
		});
		const data = await res.json().catch(() => ({}));
		if (!res.ok) return {
			ok: false,
			error: data?.error ?? "Request failed."
		};
		return {
			ok: true,
			message: data?.message ?? "Requested!"
		};
	} catch (e) {
		return {
			ok: false,
			error: e instanceof Error ? e.message : "Request failed."
		};
	}
}
function demoRequests(query) {
	const q = query.trim().toLowerCase();
	return DEMO_TRACKS.filter((t) => !q || t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q)).map((t, i) => ({
		request_id: `demo-${i}`,
		title: t.title,
		artist: t.artist
	}));
}
//#endregion
export { searchRequests as n, submitRequest as r, fetchNowPlaying as t };
