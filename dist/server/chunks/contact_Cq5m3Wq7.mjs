import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { t as SITE } from "./config_wIXgWfZz.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Contact",
		"description": "Get in touch with the Pulse Radio team.",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-6bfsojfh><div class="container narrow" data-astro-cid-6bfsojfh><span class="eyebrow" data-astro-cid-6bfsojfh><span class="dot" data-astro-cid-6bfsojfh></span> Contact</span><h1 class="page-title" data-astro-cid-6bfsojfh>Say <span class="gradient-text" data-astro-cid-6bfsojfh>hello</span></h1><p class="muted lead" data-astro-cid-6bfsojfh>Booking, artist submissions, partnerships or press — drop us a line and we'll get back to you.</p><div class="contact-grid" data-astro-cid-6bfsojfh><form class="card form" id="contact-form" novalidate data-astro-cid-6bfsojfh><div class="row" data-astro-cid-6bfsojfh><div class="field" data-astro-cid-6bfsojfh><label for="name" data-astro-cid-6bfsojfh>Name *</label><input id="name" name="name" type="text" placeholder="Your name" required data-astro-cid-6bfsojfh></div><div class="field" data-astro-cid-6bfsojfh><label for="email" data-astro-cid-6bfsojfh>Email *</label><input id="email" name="email" type="email" placeholder="you@email.com" required data-astro-cid-6bfsojfh></div></div><div class="field" data-astro-cid-6bfsojfh><label for="subject" data-astro-cid-6bfsojfh>Subject</label><select id="subject" name="subject" data-astro-cid-6bfsojfh><option data-astro-cid-6bfsojfh>General</option><option data-astro-cid-6bfsojfh>Artist submission</option><option data-astro-cid-6bfsojfh>Booking / events</option><option data-astro-cid-6bfsojfh>Partnership / press</option><option data-astro-cid-6bfsojfh>Technical issue</option></select></div><div class="field" data-astro-cid-6bfsojfh><label for="message" data-astro-cid-6bfsojfh>Message *</label><textarea id="message" name="message" placeholder="Tell us more…" required data-astro-cid-6bfsojfh></textarea></div><button class="btn primary" type="submit" id="submit-btn" data-astro-cid-6bfsojfh>Send Message</button><div class="alert" id="alert" role="status" data-astro-cid-6bfsojfh></div></form><aside class="card info" data-astro-cid-6bfsojfh><h3 data-astro-cid-6bfsojfh>Other ways to reach us</h3><ul class="info-list" data-astro-cid-6bfsojfh><li data-astro-cid-6bfsojfh><span class="info-label" data-astro-cid-6bfsojfh>Email</span><a${addAttribute(`mailto:${SITE.contactEmail}`, "href")} data-astro-cid-6bfsojfh>${SITE.contactEmail}</a></li><li data-astro-cid-6bfsojfh><span class="info-label" data-astro-cid-6bfsojfh>Studio</span><span data-astro-cid-6bfsojfh>Remote · everywhere with Wi-Fi</span></li><li data-astro-cid-6bfsojfh><span class="info-label" data-astro-cid-6bfsojfh>Social</span><div class="info-social" data-astro-cid-6bfsojfh><a${addAttribute(SITE.socials.twitter, "href")} target="_blank" rel="noopener" data-astro-cid-6bfsojfh>Twitter</a><a${addAttribute(SITE.socials.instagram, "href")} target="_blank" rel="noopener" data-astro-cid-6bfsojfh>Instagram</a><a${addAttribute(SITE.socials.discord, "href")} target="_blank" rel="noopener" data-astro-cid-6bfsojfh>Discord</a></div></li></ul></aside></div></div></section>` })}${renderScript($$result, "C:/Users/User/radio-website/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/radio-website/src/pages/contact.astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
