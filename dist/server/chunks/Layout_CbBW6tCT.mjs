import { f as renderTemplate, g as createRenderInstruction, h as addAttribute, l as renderSlot, m as renderHead, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { n as STATIONS, t as SITE } from "./config_wIXgWfZz.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const links = [
		{
			href: "/",
			label: "Home"
		},
		{
			href: "/stations",
			label: "Stations"
		},
		{
			href: "/blog",
			label: "Blog"
		},
		{
			href: "/request",
			label: "Request a Song"
		},
		{
			href: "/contact",
			label: "Contact"
		}
	];
	const path = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<header class="nav" data-astro-cid-l7arcky5><div class="container nav-inner" data-astro-cid-l7arcky5><a href="/" class="brand"${addAttribute(`${SITE.name} home`, "aria-label")} data-astro-cid-l7arcky5><span class="brand-mark" aria-hidden="true" data-astro-cid-l7arcky5></span><span class="brand-name" data-astro-cid-l7arcky5>${SITE.name}</span></a><nav class="nav-links" aria-label="Primary" data-astro-cid-l7arcky5>${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")}${addAttribute(["nav-link", { active: path === l.href }], "class:list")} data-astro-cid-l7arcky5>${l.label}</a>`)}</nav><button class="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle light and dark theme" title="Toggle theme" data-astro-cid-l7arcky5><svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-l7arcky5><circle cx="12" cy="12" r="4" data-astro-cid-l7arcky5></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" data-astro-cid-l7arcky5></path></svg><svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-l7arcky5><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-l7arcky5></path></svg></button><button class="btn primary nav-listen"${addAttribute(STATIONS[0].id, "data-station")} data-astro-cid-l7arcky5><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-l7arcky5><path d="M8 5v14l11-7z" data-astro-cid-l7arcky5></path></svg>Listen Live</button></div></header>${renderScript($$result, "C:/Users/User/radio-website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-astro-cid-jo6i4kqk><div class="container footer-inner" data-astro-cid-jo6i4kqk><div class="footer-brand" data-astro-cid-jo6i4kqk><span class="brand-mark" aria-hidden="true" data-astro-cid-jo6i4kqk></span><div data-astro-cid-jo6i4kqk><strong data-astro-cid-jo6i4kqk>${SITE.name}</strong><p class="muted" data-astro-cid-jo6i4kqk>${SITE.tagline}</p></div></div><div class="footer-cols" data-astro-cid-jo6i4kqk><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Listen</h4><a href="/" data-astro-cid-jo6i4kqk>Home</a><a href="/request" data-astro-cid-jo6i4kqk>Request a Song</a><a href="/contact" data-astro-cid-jo6i4kqk>Contact</a></div><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Connect</h4><a${addAttribute(SITE.socials.twitter, "href")} target="_blank" rel="noopener" data-astro-cid-jo6i4kqk>Twitter</a><a${addAttribute(SITE.socials.instagram, "href")} target="_blank" rel="noopener" data-astro-cid-jo6i4kqk>Instagram</a><a${addAttribute(SITE.socials.discord, "href")} target="_blank" rel="noopener" data-astro-cid-jo6i4kqk>Discord</a></div><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Studio</h4><a${addAttribute(`mailto:${SITE.contactEmail}`, "href")} data-astro-cid-jo6i4kqk>${SITE.contactEmail}</a></div></div></div><div class="container footer-bottom" data-astro-cid-jo6i4kqk><span data-astro-cid-jo6i4kqk>© ${year} ${SITE.name}. All rights reserved.</span><span class="muted" data-astro-cid-jo6i4kqk>Built with Astro</span></div></footer>`;
}, "C:/Users/User/radio-website/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/PlayerBar.astro
var $$PlayerBar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="player-bar" id="player-bar" data-astro-cid-dovzp7xh><div class="pb-left" data-astro-cid-dovzp7xh><div class="pb-art" aria-hidden="true" data-astro-cid-dovzp7xh><span class="eq playing" id="pb-eq" data-astro-cid-dovzp7xh><i data-astro-cid-dovzp7xh></i><i data-astro-cid-dovzp7xh></i><i data-astro-cid-dovzp7xh></i><i data-astro-cid-dovzp7xh></i><i data-astro-cid-dovzp7xh></i></span></div><div class="pb-meta" data-astro-cid-dovzp7xh><span class="pb-status" id="pb-status" data-astro-cid-dovzp7xh>OFFLINE</span><select id="pb-stations" class="pb-stations" aria-label="Select station" data-astro-cid-dovzp7xh>${STATIONS.map((s) => renderTemplate`<option${addAttribute(s.id, "value")} data-astro-cid-dovzp7xh>${s.name}</option>`)}</select><span class="pb-track" id="pb-track" data-astro-cid-dovzp7xh>${SITE.name}</span><span class="pb-artist" id="pb-artist" data-astro-cid-dovzp7xh>Tap play to start the stream</span></div></div><div class="pb-center" data-astro-cid-dovzp7xh><button class="pb-play" id="pb-play" aria-label="Play or pause stream" data-astro-cid-dovzp7xh><svg class="icon-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-dovzp7xh><path d="M8 5v14l11-7z" data-astro-cid-dovzp7xh></path></svg><svg class="icon-pause" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-dovzp7xh><path d="M6 5h4v14H6zM14 5h4v14h-4z" data-astro-cid-dovzp7xh></path></svg></button></div><div class="pb-right" data-astro-cid-dovzp7xh><button class="pb-mute" id="pb-mute" aria-label="Mute" data-astro-cid-dovzp7xh><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-dovzp7xh><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" data-astro-cid-dovzp7xh></path></svg></button><input type="range" id="pb-volume" min="0" max="1" step="0.01" value="0.8" aria-label="Volume" data-astro-cid-dovzp7xh></div><audio id="radio-audio" preload="none" data-astro-cid-dovzp7xh></audio></div>${renderScript($$result, "C:/Users/User/radio-website/src/components/PlayerBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/components/PlayerBar.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description } = Astro.props;
	const pageTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
	const pageDesc = description ?? SITE.description;
	return renderTemplate`<html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script>
			(function () {
				try {
					var t = localStorage.getItem('theme');
					if (t !== 'light' && t !== 'dark') {
						t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
					}
					document.documentElement.setAttribute('data-theme', t);
				} catch (e) {
					document.documentElement.setAttribute('data-theme', 'dark');
				}
			})();
		<\/script><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${pageTitle}</title><meta name="description"${addAttribute(pageDesc, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDesc, "content")}><meta property="og:type" content="website"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${renderComponent($$result, "Navbar", $$Navbar, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "PlayerBar", $$PlayerBar, {})}</body>${renderScript($$result, "C:/Users/User/radio-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</html>`;
}, "C:/Users/User/radio-website/src/layouts/Layout.astro", void 0);
//#endregion
export { renderScript as n, $$Layout as t };
