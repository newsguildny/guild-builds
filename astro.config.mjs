// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://nytimesguild.org",
  integrations: [icon(), partytown()],
  base: "/tech/guild-builds",
});
