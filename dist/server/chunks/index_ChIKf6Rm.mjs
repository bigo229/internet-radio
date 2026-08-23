import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { n as STATIONS, t as SITE } from "./config_wIXgWfZz.mjs";
import { n as $$NowPlaying, t as $$SongHistory } from "./SongHistory_CDaFx8HM.mjs";
import { t as $$StationCard } from "./StationCard_nHZwQYDC.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const featured = STATIONS[0];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-lcdefpme": true }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero" data-astro-cid-lcdefpme><div class="container hero-inner" data-astro-cid-lcdefpme><span class="eyebrow" data-astro-cid-lcdefpme><span class="dot" data-astro-cid-lcdefpme></span> ${SITE.name} · 24/7 Live</span><h1 class="hero-title" data-astro-cid-lcdefpme>Sound that <span class="gradient-text" data-astro-cid-lcdefpme>moves</span><br data-astro-cid-lcdefpme>you, all day long.</h1><p class="hero-sub muted" data-astro-cid-lcdefpme>${SITE.description}</p><div class="hero-actions" data-astro-cid-lcdefpme><button class="btn primary"${addAttribute(featured.id, "data-station")} data-astro-cid-lcdefpme><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-lcdefpme><path d="M8 5v14l11-7z" data-astro-cid-lcdefpme></path></svg>Listen to ${featured.name}</button><a class="btn" href="/stations" data-astro-cid-lcdefpme>All Stations</a><a class="btn" href="/request" data-astro-cid-lcdefpme>Request a Song</a></div></div></section><section class="section" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>Our Stations</h2><p class="muted" data-astro-cid-lcdefpme>Six curated streams. Pick a vibe and press play.</p></div><div class="stations-grid" data-astro-cid-lcdefpme>${STATIONS.map((s) => renderTemplate`${renderComponent($$result, "StationCard", $$StationCard, {
		"station": s,
		"data-astro-cid-lcdefpme": true
	})}`)}</div></div></section><section class="section" data-astro-cid-lcdefpme><div class="container home-grid" data-astro-cid-lcdefpme>${renderComponent($$result, "NowPlaying", $$NowPlaying, {
		"station": featured,
		"data-astro-cid-lcdefpme": true
	})}<aside class="side card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>On ${featured.name} right now</h3><p class="muted" data-astro-cid-lcdefpme>A rolling log of what's been spinning on our featured stream.</p>${renderComponent($$result, "SongHistory", $$SongHistory, {
		"endpoint": `/api/station/${featured.id}/nowplaying.json`,
		"title": "Recently Played",
		"limit": 12,
		"viewAll": `/stations/${featured.id}`,
		"data-astro-cid-lcdefpme": true
	})}<div class="divider" data-astro-cid-lcdefpme></div><h3 data-astro-cid-lcdefpme>Want to get in touch?</h3><p class="muted" data-astro-cid-lcdefpme>Booking, submissions, partnerships or just saying hi.</p><a class="btn" href="/contact" data-astro-cid-lcdefpme>Contact Us</a></aside></div></section>` })}`;
}, "C:/Users/User/radio-website/src/pages/index.astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
