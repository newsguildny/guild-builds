// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://nytimesguild.org/tech/guild-builds",
  integrations: [icon(), partytown()],
  site: "https://nytimesguild.org",
  base: "/tech/guild-builds",
});
