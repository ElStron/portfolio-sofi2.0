import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-sofi2-0-omega.vercel.app",
  integrations: [react()],
  output: "server",
  adapter: vercelServerless(),
  experimental: {
    serverIslands: true,
  },
});
