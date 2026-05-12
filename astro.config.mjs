import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [serviceWorker(), tailwind(), react(), icon({ include: { ri: ['*'] } })],
    output: 'hybrid',
    adapter: vercel()
});
