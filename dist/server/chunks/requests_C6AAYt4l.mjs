import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { n as STATIONS } from "./config_wIXgWfZz.mjs";
import { n as searchRequests, r as submitRequest } from "./azuracast_CV-Slgl9.mjs";
//#region src/pages/api/station/[id]/requests.json.ts
var requests_json_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	POST: () => POST,
	prerender: () => false
});
var GET = async ({ params, url }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) return new Response(JSON.stringify({ error: "Station not found" }), {
		status: 404,
		headers: { "content-type": "application/json" }
	});
	const q = url.searchParams.get("q") ?? "";
	const results = await searchRequests(station, q);
	return new Response(JSON.stringify({ results }), {
		status: 200,
		headers: { "content-type": "application/json" }
	});
};
var POST = async ({ params, request }) => {
	const station = STATIONS.find((s) => s.id === params.id);
	if (!station) return new Response(JSON.stringify({ error: "Station not found" }), {
		status: 404,
		headers: { "content-type": "application/json" }
	});
	const body = await request.json().catch(() => null);
	if (!body?.request_id) return new Response(JSON.stringify({ error: "Missing request_id." }), {
		status: 400,
		headers: { "content-type": "application/json" }
	});
	const result = await submitRequest(station, body.request_id);
	return new Response(JSON.stringify(result), {
		status: result.ok ? 200 : 400,
		headers: { "content-type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/station/[id]/requests.json@_@ts
var page = () => requests_json_exports;
//#endregion
export { page };
