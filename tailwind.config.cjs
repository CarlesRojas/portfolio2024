const defaultTheme = require('tailwindcss/defaultTheme'); // eslint-disable-line

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            sans: {
                fontFamily: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateAreas: {
                'timeline-mobile': ['icon job'],
                timeline: ['date icon job'],
                'timeline-inverted': ['job icon date'],
            },
        },
    },

    plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
