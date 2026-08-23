import { f as renderTemplate, h as addAttribute, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
//#region src/components/StationCard.astro
createAstro("https://astro.build");
var $$StationCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StationCard;
	const { station } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="station-card"${addAttribute(`--accent:${station.accent}`, "style")} data-astro-cid-vwcdn4a7><div class="sc-top" data-astro-cid-vwcdn4a7><span class="sc-live" data-astro-cid-vwcdn4a7><span class="sc-dot" data-astro-cid-vwcdn4a7></span> LIVE</span><span class="sc-genre" data-astro-cid-vwcdn4a7>${station.genre}</span></div><h3 class="sc-name" data-astro-cid-vwcdn4a7>${station.name}</h3><p class="sc-desc muted" data-astro-cid-vwcdn4a7>${station.description}</p><div class="sc-actions" data-astro-cid-vwcdn4a7><button class="btn primary"${addAttribute(station.id, "data-station")} data-astro-cid-vwcdn4a7><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-vwcdn4a7><path d="M8 5v14l11-7z" data-astro-cid-vwcdn4a7></path></svg>Listen</button><a class="btn ghost"${addAttribute(`/stations/${station.id}`, "href")} data-astro-cid-vwcdn4a7>Open</a></div></article>`;
}, "C:/Users/User/radio-website/src/components/StationCard.astro", void 0);
//#endregion
export { $$StationCard as t };
