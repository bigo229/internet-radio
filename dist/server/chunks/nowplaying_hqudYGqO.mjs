import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { n as STATIONS } from "./config_wIXgWfZz.mjs";
import { t as fetchNowPlaying } from "./azuracast_CV-Slgl9.mjs";
//#region src/pages/api/station/[id]/nowplaying.json.ts
var nowplaying_json_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ params }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) return new Response(JSON.stringify({ error: "Station not found" }), {
		status: 404,
		headers: { "content-type": "application/json" }
	});
	const np = await fetchNowPlaying(station);
	return new Response(JSON.stringify(np), {
		status: 200,
		headers: { "content-type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/station/[id]/nowplaying.json@_@ts
var page = () => nowplaying_json_exports;
//#endregion
export { page };
