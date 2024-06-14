import Poster from '@asset/bookly/poster.png';
import Icon from '@asset/juegology/icon.png';
import Qr from '@asset/juegology/qr.png';
import QrInv from '@asset/juegology/qr_inverted.png';
import Screenshot1 from '@asset/juegology/screenshot1.png';
import Screenshot2 from '@asset/juegology/screenshot2.png';
import Screenshot3 from '@asset/juegology/screenshot3.png';
import Screenshot4 from '@asset/juegology/screenshot4.png';

import type { Project } from '@data/projects';

export const juegology: Project = {
    route: 'juegology',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    title: 'Juegology',
    subtitle: 'Connecting board game enthusiasts: Your central hub for all things board games!',
    description: [
        "Juegology is a platform for board game enthusiasts to connect, share, and discover new games. Whether you're a casual player or a seasoned veteran, Juegology has something for everyone.",
        'Create your own collection, rate games, and share your thoughts with the community. Stay up-to-date with the latest board game news and reviews.',
        'Juegology is your central hub for all things board games!'
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.vercel.juegology.twa', icon: 'ri:android-fill' },
        { url: 'https://www.microsoft.com/store/apps/9mvp6v4312bj', icon: 'ri:windows-fill' },
        { url: 'https://github.com/Juegology/juegology', icon: 'ri:github-fill' }
    ],
    qr: { url: 'https://juegology.vercel.app', src: Qr, srcInv: QrInv },
    process:
        'Juegology is a Progressive Web App made with NextJS 14, TypeScript, React-Query, Next-Auth and Drizzle. It targets mobile, tablet and desktop devices and it is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2024-05-01',
    horizontal: false
};
