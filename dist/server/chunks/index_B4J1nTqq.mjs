import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, h as addAttribute, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { t as getCollection } from "./_astro_content_BOOKfeVm.mjs";
import { t as SITE } from "./config_wIXgWfZz.mjs";
//#region src/components/BlogCard.astro
createAstro("https://astro.build");
var $$BlogCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogCard;
	const { post } = Astro.props;
	const date = post.data.pubDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
	return renderTemplate`${maybeRenderHead($$result)}<article class="blog-card" data-astro-cid-vqljwchw><a${addAttribute(`/blog/${post.id}`, "href")} class="blog-card-link" data-astro-cid-vqljwchw><div class="bc-top" data-astro-cid-vqljwchw><span class="bc-date" data-astro-cid-vqljwchw>${date}</span>${post.data.tags[0] && renderTemplate`<span class="bc-tag" data-astro-cid-vqljwchw>${post.data.tags[0]}</span>`}</div><h3 class="bc-title" data-astro-cid-vqljwchw>${post.data.title}</h3><p class="bc-excerpt muted" data-astro-cid-vqljwchw>${post.data.description}</p><span class="bc-author" data-astro-cid-vqljwchw>By ${post.data.author}</span></a></article>`;
}, "C:/Users/User/radio-website/src/components/BlogCard.astro", void 0);
//#endregion
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Blog",
		"description": `News and notes from ${SITE.name}.`,
		"data-astro-cid-x255k2k2": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-x255k2k2><div class="container" data-astro-cid-x255k2k2><div class="blog-hero" data-astro-cid-x255k2k2><span class="eyebrow" data-astro-cid-x255k2k2><span class="dot" data-astro-cid-x255k2k2></span> The Blog</span><h1 class="page-title" data-astro-cid-x255k2k2>Notes from <span class="gradient-text" data-astro-cid-x255k2k2>${SITE.name}</span></h1><p class="muted lead" data-astro-cid-x255k2k2>New music, station news and the occasional behind-the-scenes peek.</p></div>${posts.length ? renderTemplate`<div class="blog-grid" data-astro-cid-x255k2k2>${posts.map((p) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, {
		"post": p,
		"data-astro-cid-x255k2k2": true
	})}`)}</div>` : renderTemplate`<p class="muted" data-astro-cid-x255k2k2>No posts yet — check back soon.</p>`}</div></section>` })}`;
}, "C:/Users/User/radio-website/src/pages/blog/index.astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
