import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [serviceWorker(), tailwind(), react()]
});