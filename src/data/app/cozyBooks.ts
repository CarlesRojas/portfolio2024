import Icon from '@asset/cozyBooks/icon.png';
import Poster from '@asset/bookly/poster.png';
import Qr from '@asset/cozyBooks/qr.png';
import QrInv from '@asset/cozyBooks/qr_inverted.png';
import Screenshot1 from '@asset/cozyBooks/screenshot1.png';
import Screenshot2 from '@asset/cozyBooks/screenshot2.png';
import Screenshot3 from '@asset/cozyBooks/screenshot3.png';
import Screenshot4 from '@asset/cozyBooks/screenshot4.png';
import Screenshot5 from '@asset/cozyBooks/screenshot5.png';

import type { Project } from '@data/projects';

export const cozyBooks: Project = {
    route: 'cozyBooks',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    title: 'CozyBooks',
    subtitle: 'A modern reading tracker for building and organizing your personal library.',
    description: [
        'Discover books, organize your library, and track your reading progress across completed, current, and planned reads.',
        'Get detailed reading insights with personalized stats, yearly goals, reading streaks, page counts, ratings, and activity history.'
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.cozybooks.pinya', icon: 'ri:android-fill' },
        { url: 'https://github.com/CarlesRojas/cozybooks', icon: 'ri:github-fill' }
    ],
    qr: { url: 'http://cozybooks.app/', src: Qr, srcInv: QrInv },
    process:
        'CozyBooks is a full-stack PWA built with React, TanStack Start, TypeScript, Drizzle ORM, PostgreSQL, and Tailwind CSS. It features type-safe routing, authentication, responsive design, and cross-platform support for web, Android, and desktop.',
    date: '2025-08-01',
    horizontal: false
};
