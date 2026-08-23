import { f as renderTemplate, h as addAttribute, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { n as renderScript } from "./Layout_CbBW6tCT.mjs";
//#region src/components/NowPlaying.astro
createAstro("https://astro.build");
var $$NowPlaying = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NowPlaying;
	const { station } = Astro.props;
	station && `${station.id}`;
	return renderTemplate`${maybeRenderHead($$result)}<section class="now-playing card" aria-live="polite"${addAttribute(station?.id, "data-station")}${addAttribute(station ? `--accent:${station.accent}` : "", "style")} data-astro-cid-anhc3lkx><div class="np-head" data-astro-cid-anhc3lkx><span class="live-dot" id="np-dot" data-astro-cid-anhc3lkx></span><span data-astro-cid-anhc3lkx>NOW PLAYING</span></div><div class="np-art" aria-hidden="true" data-astro-cid-anhc3lkx><span class="eq" id="np-eq" data-astro-cid-anhc3lkx><i data-astro-cid-anhc3lkx></i><i data-astro-cid-anhc3lkx></i><i data-astro-cid-anhc3lkx></i><i data-astro-cid-anhc3lkx></i><i data-astro-cid-anhc3lkx></i></span></div><div class="np-text" data-astro-cid-anhc3lkx><h2 id="np-title" class="gradient-text" data-astro-cid-anhc3lkx>Live Stream</h2><p id="np-artist" class="muted" data-astro-cid-anhc3lkx>Connecting to the studio…</p></div><button class="btn primary np-play" id="np-play" data-astro-cid-anhc3lkx><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-anhc3lkx><path d="M8 5v14l11-7z" data-astro-cid-anhc3lkx></path></svg><span id="np-play-label" data-astro-cid-anhc3lkx>Listen Live</span></button></section>${renderScript($$result, "C:/Users/User/radio-website/src/components/NowPlaying.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/components/NowPlaying.astro", void 0);
//#endregion
//#region src/components/SongHistory.astro
createAstro("https://astro.build");
var $$SongHistory = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SongHistory;
	const { endpoint, limit = 20, title = "Recently Played", compact = false, viewAll = "/stations" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(["song-history", { compact }], "class:list")}><div class="sh-head"><h3>${title}</h3>${viewAll && renderTemplate`<a class="sh-all"${addAttribute(viewAll, "href")}>View all &rarr;</a>`}</div><ul class="sh-list"${addAttribute(limit, "data-limit")}${addAttribute(endpoint, "data-endpoint")}><li class="sh-empty">Loading history&hellip;</li></ul></section>${renderScript($$result, "C:/Users/User/radio-website/src/components/SongHistory.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/components/SongHistory.astro", void 0);
//#endregion
export { $$NowPlaying as n, $$SongHistory as t };
