import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { n as STATIONS, t as SITE } from "./config_wIXgWfZz.mjs";
import { n as $$NowPlaying, t as $$SongHistory } from "./SongHistory_CDaFx8HM.mjs";
import { t as $$RequestForm } from "./RequestForm_MBACd3dr.mjs";
//#region src/pages/stations/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	const station = STATIONS.find((s) => s.id === id);
	if (!station) return Astro.redirect("/stations");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${station.name} — Now Playing`,
		"description": `Listen to ${station.name} on ${SITE.name}.`,
		"data-astro-cid-gb5ceurw": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="station-hero"${addAttribute(`--accent:${station.accent}`, "style")} data-astro-cid-gb5ceurw><span class="eyebrow" data-astro-cid-gb5ceurw><span class="dot" data-astro-cid-gb5ceurw></span> ${station.genre}</span><h1 class="sh-title gradient-text" data-astro-cid-gb5ceurw>${station.name}</h1><p class="muted" data-astro-cid-gb5ceurw>${station.description}</p><div class="sh-actions" data-astro-cid-gb5ceurw><button class="btn primary"${addAttribute(station.id, "data-station")} data-astro-cid-gb5ceurw><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-gb5ceurw><path d="M8 5v14l11-7z" data-astro-cid-gb5ceurw></path></svg>Listen Live</button><a class="btn" href="/stations" data-astro-cid-gb5ceurw>All Stations</a></div></section><section class="section" data-astro-cid-gb5ceurw><div class="container station-grid" data-astro-cid-gb5ceurw>${renderComponent($$result, "NowPlaying", $$NowPlaying, {
		"station": station,
		"data-astro-cid-gb5ceurw": true
	})}<div class="side" data-astro-cid-gb5ceurw>${renderComponent($$result, "SongHistory", $$SongHistory, {
		"endpoint": `/api/station/${station.id}/nowplaying.json`,
		"title": "Recently Played",
		"limit": 14,
		"viewAll": false,
		"data-astro-cid-gb5ceurw": true
	})}</div></div></section><section class="section" data-astro-cid-gb5ceurw><div class="container narrow" data-astro-cid-gb5ceurw>${renderComponent($$result, "RequestForm", $$RequestForm, {
		"station": station,
		"data-astro-cid-gb5ceurw": true
	})}</div></section>` })}`;
}, "C:/Users/User/radio-website/src/pages/stations/[id].astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/stations/[id].astro";
var $$url = "/stations/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/stations/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
