
				import createSSRHandler from './.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":true});
				export const config = { name: "Astro SSR", generator: "@astrojs/netlify@5.3.5", path: "/*", preferStatic: true };
			