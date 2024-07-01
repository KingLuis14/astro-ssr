import { c as createComponent, r as renderTemplate, a as addAttribute, h as renderHead, b as createAstro } from './astro/server_DYjK6ClK.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> <!-- <a href="/curso/"></a> --> </body></html>`;
}, "D:/Usuarios/enrique actual/Desktop/astro/astro-ssr/src/pages/index.astro", void 0);

const $$file = "D:/Usuarios/enrique actual/Desktop/astro/astro-ssr/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
