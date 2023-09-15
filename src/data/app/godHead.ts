import Icon from '@asset/godHead/icon.png';
import Poster from '@asset/godHead/poster.png';
import Qr from '@asset/godHead/qr.png';
import QrInv from '@asset/godHead/qr_inverted.png';
import Screenshot1 from '@asset/godHead/screenshot1.png';
import Screenshot2 from '@asset/godHead/screenshot2.png';
import Screenshot3 from '@asset/godHead/screenshot3.png';
import Screenshot4 from '@asset/godHead/screenshot4.png';

import type { Project } from '@data/projects';

export const godHead: Project = {
    route: 'godHead',
    title: 'GodHead',
    poster: Poster,
    icon: Icon,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    subtitle: 'Find out what each item does in The Binding of Isaac: Repentance.',
    description: [
        'Having trouble remembering what an item does? The Binding of Isaac has more than a thousand of them, so it is not surprising. Use this app to quickly find out everything about them.',
        'You can search the items by their icon, their name or their subtitle.',
    ],
    links: [{ url: 'https://github.com/CarlesRojas/GodHead', icon: 'ri:github-fill' }],
    qr: { url: 'http://godhead.netlify.app/', src: Qr, srcInv: QrInv },
    process:
        'GodHead is a Progressive Web App made with ReactJS targeting mobile and desktop devices. You can add it as an app to your PC, Android, or iPhone by scanning this QR and adding the page to your Home Screen.',
    date: '2021-05-01',
    horizontal: true,
};
