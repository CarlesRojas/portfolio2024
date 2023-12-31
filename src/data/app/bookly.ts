import Icon from '@asset/bookly/icon.png';
import Poster from '@asset/bookly/poster.png';
import Qr from '@asset/bookly/qr.png';
import QrInv from '@asset/bookly/qr_inverted.png';
import Screenshot1 from '@asset/bookly/screenshot1.png';
import Screenshot2 from '@asset/bookly/screenshot2.png';
import Screenshot3 from '@asset/bookly/screenshot3.png';
import Screenshot4 from '@asset/bookly/screenshot4.png';
import Screenshot5 from '@asset/bookly/screenshot5.png';
import Screenshot6 from '@asset/bookly/screenshot6.png';

import type { Project } from '@data/projects';

export const bookly: Project = {
    route: 'bookly',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5, Screenshot6],
    title: 'Bookly',
    subtitle: 'Keep track of the books you’ve read and the ones you wish to read.',
    description: [
        'Search for any book and add it to your library. Keep track of the books you are reading and the ones you wish to read.',
        'View stats like how many books you have read in total or the average number of pages you read per year.',
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.vercel.bookly2', icon: 'ri:android-fill' },
        { url: 'https://www.microsoft.com/store/apps/9P8HL4CVHVBM', icon: 'ri:windows-fill' },
        { url: 'https://github.com/CarlesRojas/bookly2', icon: 'ri:github-fill' },
    ],
    qr: { url: 'https://bookly2.vercel.app/', src: Qr, srcInv: QrInv },
    process:
        'Bookly is a Progressive Web App made with NextJS, TypeScript, tRPC, next-auth and Prisma. It targets mobile, tablet and desktop devices and it is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2022-09-01',
    horizontal: false,
};
