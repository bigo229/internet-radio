import { t as __exportAll } from "./rolldown-runtime_BBjsoOtd.mjs";
import { f as renderTemplate, o as renderComponent, p as maybeRenderHead, w as createAstro } from "./server_BXQXZODw.mjs";
import { t as createComponent } from "./compiler_DC_kCLW9.mjs";
import { t as $$Layout } from "./Layout_CbBW6tCT.mjs";
import { n as getEntry, r as renderEntry } from "./_astro_content_BOOKfeVm.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { slug } = Astro.params;
	const post = slug ? await getEntry("blog", slug) : void 0;
	if (!post) return Astro.redirect("/blog");
	const { Content } = await renderEntry(post);
	const date = post.data.pubDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": post.data.title,
		"description": post.data.description,
		"data-astro-cid-jo55ryrt": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="blog-post container narrow" data-astro-cid-jo55ryrt><a class="back" href="/blog" data-astro-cid-jo55ryrt>&larr; All posts</a><div class="bp-meta" data-astro-cid-jo55ryrt><span data-astro-cid-jo55ryrt>${date}</span>${post.data.tags.map((t) => renderTemplate`<span class="bp-tag" data-astro-cid-jo55ryrt>${t}</span>`)}</div><h1 class="bp-title gradient-text" data-astro-cid-jo55ryrt>${post.data.title}</h1><p class="bp-author muted" data-astro-cid-jo55ryrt>By ${post.data.author}</p><div class="prose" data-astro-cid-jo55ryrt>${renderComponent($$result, "Content", Content, { "data-astro-cid-jo55ryrt": true })}</div></article>` })}`;
}, "C:/Users/User/radio-website/src/pages/blog/[...slug].astro", void 0);
var $$file = "C:/Users/User/radio-website/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
