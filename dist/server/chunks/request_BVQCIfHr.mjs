import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
//#region src/pages/api/request.json.ts
var request_json_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var DATA_DIR = fileURLToPath(new URL("../../../data", import.meta.url));
var DATA_FILE = path.join(DATA_DIR, "requests.json");
var POST = async ({ request }) => {
	const body = await request.json().catch(() => null);
	if (!body || !body.song?.trim() || !body.artist?.trim()) return new Response(JSON.stringify({ error: "Song title and artist are required." }), {
		status: 400,
		headers: { "content-type": "application/json" }
	});
	const entry = {
		song: body.song.trim(),
		artist: body.artist.trim(),
		name: body.name?.trim() || void 0,
		message: body.message?.trim() || void 0,
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	try {
		await mkdir(DATA_DIR, { recursive: true });
		let existing = [];
		try {
			existing = JSON.parse(await readFile(DATA_FILE, "utf-8"));
		} catch {}
		existing.push(entry);
		await writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
	} catch {
		return new Response(JSON.stringify({ error: "Could not save your request." }), {
			status: 500,
			headers: { "content-type": "application/json" }
		});
	}
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "content-type": "application/json" }
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/request.json@_@ts
var page = () => request_json_exports;
//#endregion
export { page };
