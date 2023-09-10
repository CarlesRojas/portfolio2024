import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    integrations: [serviceWorker(), tailwind(), react()],
    output: 'hybrid',
    adapter: vercel(),
    // image: {
    //     domains: ['portfoliomedia.s3.eu-west-1.amazonaws.com'],
    // },
});
