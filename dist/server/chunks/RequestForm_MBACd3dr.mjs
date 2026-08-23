import { f as renderTemplate, h as addAttribute, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { n as renderScript } from "./Layout_CbBW6tCT.mjs";
//#region src/components/RequestForm.astro
createAstro("https://astro.build");
var $$RequestForm = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RequestForm;
	const { station } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="request-ac card"${addAttribute(station.id, "data-station-id")}${addAttribute(`--accent:${station.accent}`, "style")}><div class="rc-head"><h3>Request a Song</h3><p class="muted">Search ${station.name}'s library and send a request to the DJ.</p></div><form class="rc-search"><input class="rc-q" type="search" placeholder="Search songs or artists…" autocomplete="off"><button class="btn primary rc-search-btn" type="submit">Search</button></form><ul class="rc-results"><li class="rc-empty">Search to see requestable songs.</li></ul><div class="alert rc-alert" role="status"></div></section>${renderScript($$result, "C:/Users/User/radio-website/src/components/RequestForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/components/RequestForm.astro", void 0);
//#endregion
export { $$RequestForm as t };
