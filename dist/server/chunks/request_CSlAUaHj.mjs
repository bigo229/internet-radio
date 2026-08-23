import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { n as STATIONS } from "./config_wIXgWfZz.mjs";
import { t as $$RequestForm } from "./RequestForm_MBACd3dr.mjs";
//#region src/pages/request.astro
var request_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Request,
	file: () => $$file,
	url: () => $$url
});
var $$Request = createComponent(($$result, $$props, $$slots) => {
	const first = STATIONS[0];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Request a Song",
		"description": "Request a track on one of our AzuraCast stations.",
		"data-astro-cid-npqrvoeq": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-npqrvoeq><div class="container narrow" data-astro-cid-npqrvoeq><span class="eyebrow" data-astro-cid-npqrvoeq><span class="dot" data-astro-cid-npqrvoeq></span> Song Requests</span><h1 class="page-title" data-astro-cid-npqrvoeq>Request a <span class="gradient-text" data-astro-cid-npqrvoeq>track</span></h1><p class="muted lead" data-astro-cid-npqrvoeq>Pick a station, search its library and send a request straight to that stream's DJ.</p><div class="field req-pick" data-astro-cid-npqrvoeq><label for="req-station" data-astro-cid-npqrvoeq>Station</label><select id="req-station" data-astro-cid-npqrvoeq>${STATIONS.map((s) => renderTemplate`<option${addAttribute(s.id, "value")} data-astro-cid-npqrvoeq>${s.name} — ${s.genre}</option>`)}</select></div><div class="req-forms" data-astro-cid-npqrvoeq>${STATIONS.map((s) => renderTemplate`<div class="req-panel"${addAttribute(s.id, "data-station-id")}${addAttribute(s.id === first.id ? "" : "display:none", "style")} data-astro-cid-npqrvoeq>${renderComponent($$result, "RequestForm", $$RequestForm, {
		"station": s,
		"data-astro-cid-npqrvoeq": true
	})}</div>`)}</div></div></section>` })}${renderScript($$result, "C:/Users/User/radio-website/src/pages/request.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/pages/request.astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/request.astro";
var $$url = "/request";
//#endregion
//#region \0virtual:astro:page:src/pages/request@_@astro
var page = () => request_exports;
//#endregion
export { page };
