import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify({
    cacheOnDemandPages: true,
  })
});