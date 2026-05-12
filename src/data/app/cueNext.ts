import Poster from '@asset/bookly/poster.png';
import Icon from '@asset/cueNext/icon.png';
import Qr from '@asset/cueNext/qr.png';
import QrInv from '@asset/cueNext/qr_inverted.png';
import Screenshot1 from '@asset/cueNext/screenshot1.png';
import Screenshot2 from '@asset/cueNext/screenshot2.png';
import Screenshot3 from '@asset/cueNext/screenshot3.png';
import Screenshot4 from '@asset/cueNext/screenshot4.png';
import Screenshot5 from '@asset/cueNext/screenshot5.png';

import type { Project } from '@data/projects';

export const cueNext: Project = {
    route: 'cueNext',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    title: 'CueNext',
    subtitle: 'Track movies and TV shows, discover new favorites, and never miss a release.',
    description: [
        'Organize your watchlist, track episodes and movies you have watched, and keep up with upcoming releases.',
        'Discover trending content, view detailed stats, and find where to stream your favorite shows and films.'
    ],
    links: [
        { url: 'https://apps.apple.com/es/app/cuenext/id6761937546', icon: 'ri:apple-fill' },
        { url: 'https://play.google.com/store/apps/details?id=app.cuenext.pinya', icon: 'ri:android-fill' },
        { url: 'https://github.com/CarlesRojas/cuenext', icon: 'ri:github-fill' }
    ],
    qr: { url: 'https://cuenext.app/', src: Qr, srcInv: QrInv },
    process:
        'CueNext is a full-stack PWA built with React 19, TanStack Start, TypeScript, Convex, and Tailwind CSS. It features real-time syncing, authentication with Clerk, responsive mobile-first design, offline support, and cross-platform compatibility across web, Android, Apple, and desktop devices.',
    date: '2026-06-01',
    horizontal: false
};
