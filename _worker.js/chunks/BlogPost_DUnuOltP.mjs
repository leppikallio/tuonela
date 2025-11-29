globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, c as createComponent, r as renderComponent, b as renderHead, f as renderSlot, a as renderTemplate, d as addAttribute } from './astro/server_COQxwrqf.mjs';
import { $ as $$Image } from './_astro_assets_2sUZuWQ2.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header_L8LzwiRh.mjs';
import { $ as $$FormattedDate } from './FormattedDate_CAp5Azkt.mjs';
/* empty css                         */

const $$Astro = createAstro("https://tuone.la");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  const isImageMetadata = (img) => typeof img === "object" && img !== null && "src" in img;
  const heroImageMeta = heroImage && isImageMetadata(heroImage) ? heroImage : void 0;
  const heroImageUrl = heroImage && typeof heroImage === "string" ? heroImage : void 0;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImageMeta && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImageMeta, "alt": "", "data-astro-cid-bvzihdzo": true })}`} ${heroImageUrl && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImageUrl, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/home/runner/work/tuonela-private/tuonela-private/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
