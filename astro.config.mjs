import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https:/Frida-ai.com",
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  experimental: {
    env: {
      schema: {
        EMAIL_HOST: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PASS: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PORT: envField.number({
          context: "server",
          access: "secret",
          optional: false,
        }),
        SITE_URL: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        PUBLIC_YT_API_KEY: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
});