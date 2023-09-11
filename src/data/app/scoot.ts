import Icon from '@asset/scoot/icon.png';
import Poster from '@asset/scoot/poster.png';
import Screenshot1 from '@asset/scoot/screenshot1.jpg';
import Screenshot2 from '@asset/scoot/screenshot2.jpg';
import Screenshot3 from '@asset/scoot/screenshot3.jpg';
// import Screenshot4 from '@asset/scoot/screenshot4.jpg';
// import Screenshot5 from '@asset/scoot/screenshot5.jpg';
// import Screenshot6 from '@asset/scoot/screenshot6.jpg';
// import Screenshot7 from '@asset/scoot/screenshot7.jpg';
import Qr from '@asset/scoot/qr.png';
import QrInv from '@asset/scoot/qr_inverted.png';
import Video from '@asset/scoot/video.mp4';

import type { Project } from '@data/projects';

export const scoot: Project = {
    route: 'scoot',
    title: 'Scoot',
    poster: Poster,
    icon: Icon,
    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        // Screenshot4,
        // Screenshot5,
        // Screenshot6,
        // Screenshot7
    ],
    subtitle: 'Navigate a great catalog of motorcycles by Mundimoto.',
    description: [
        'The application allows you to explore Mundimoto’s motorcycles while it learns your preferences to show you more relevant results.',
        'This app was developed alongside Jaume Ballester and Santi Rubio for the 2022 HackUPC.',
    ],
    links: [
        { url: 'https://github.com/CarlesRojas/hackupc2022', icon: 'ri:github-fill' },
        { url: 'https://github.com/JaumeBallester/hackupc2022-server', icon: 'ri:github-fill' },
    ],
    qr: { url: 'https://scoot.pinya.app/', src: Qr, srcInv: QrInv },
    video: Video,
    process:
        'Scoot is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices. You can also add it to your phone by scanning or clicking this QR and adding the website to your Home Screen.',
    date: '2022-05-01',
    horizontal: false,
};
