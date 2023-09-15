import Icon from '@asset/kubic/icon.png';
import Poster from '@asset/kubic/poster.png';
import Qr from '@asset/kubic/qr.png';
import QrInv from '@asset/kubic/qr_inverted.png';
import Screenshot1 from '@asset/kubic/screenshot1.png';
import Screenshot2 from '@asset/kubic/screenshot2.png';
import Screenshot3 from '@asset/kubic/screenshot3.png';
import Screenshot4 from '@asset/kubic/screenshot4.png';
import Screenshot5 from '@asset/kubic/screenshot5.png';
import Video from '@asset/kubic/video.mp4';

import type { Project } from '@data/projects';

export const kubic: Project = {
    route: 'kubic',
    poster: Poster,
    icon: Icon,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    title: 'Kubic',
    subtitle: 'Stack and puzzle the 3D tetrominos to avoid them getting to the top!',
    description: [
        'Both the pieces and the board have three dimensions, making this a lot more challenging! Clear planes by filling them and try to reach the highest score by clearing four at the same time!',
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.pinya.kubic', icon: 'ri:android-fill' },
        { url: 'https://www.microsoft.com/store/apps/9NZLVCD128J4', icon: 'ri:windows-fill' },
        { url: 'https://github.com/CarlesRojas/kubic-client', icon: 'ri:github-fill' },
        { url: 'https://github.com/CarlesRojas/kubic-server', icon: 'ri:github-fill' },
    ],
    qr: {
        url: 'https://kubic.pinya.app/',
        src: Qr,
        srcInv: QrInv,
    },
    video: Video,
    process:
        'Kubic is a Progressive Web App made with ReactJS and ThreeJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2022-02-01',
    horizontal: false,
};
