import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { n as STATIONS, t as SITE } from "./config_wIXgWfZz.mjs";
import { t as $$StationCard } from "./StationCard_nHZwQYDC.mjs";
//#region src/pages/stations/index.astro
var stations_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Stations",
		"description": `All ${SITE.name} streams in one place.`,
		"data-astro-cid-brhmoxey": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-brhmoxey><div class="container" data-astro-cid-brhmoxey><div class="stations-hero" data-astro-cid-brhmoxey><span class="eyebrow" data-astro-cid-brhmoxey><span class="dot" data-astro-cid-brhmoxey></span> ${STATIONS.length} Streams</span><h1 class="page-title" data-astro-cid-brhmoxey>Pick your <span class="gradient-text" data-astro-cid-brhmoxey>vibe</span></h1><p class="muted lead" data-astro-cid-brhmoxey>Six always-on AzuraCast streams. Tap a station to listen, or open it to see what's playing, the song history and request a track.</p></div><div class="stations-grid" data-astro-cid-brhmoxey>${STATIONS.map((s) => renderTemplate`${renderComponent($$result, "StationCard", $$StationCard, {
		"station": s,
		"data-astro-cid-brhmoxey": true
	})}`)}</div></div></section>` })}`;
}, "C:/Users/User/radio-website/src/pages/stations/index.astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/stations/index.astro";
var $$url = "/stations";
//#endregion
//#region \0virtual:astro:page:src/pages/stations/index@_@astro
var page = () => stations_exports;
//#endregion
export { page };
