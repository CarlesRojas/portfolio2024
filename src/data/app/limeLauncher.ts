import Icon from '@asset/limeLauncher/icon.png';
import Poster from '@asset/limeLauncher/poster.png';
import Screenshot1 from '@asset/limeLauncher/screenshot1.png';
import Screenshot2 from '@asset/limeLauncher/screenshot2.png';
import Screenshot3 from '@asset/limeLauncher/screenshot3.png';
import Screenshot4 from '@asset/limeLauncher/screenshot4.png';
// import Screenshot5 from '@asset/limeLauncher/screenshot5.png';
// import Screenshot6 from '@asset/limeLauncher/screenshot6.png';
// import Screenshot7 from '@asset/limeLauncher/screenshot7.png';
import Qr from '@asset/limeLauncher/qr.png';
import QrInv from '@asset/limeLauncher/qr_inverted.png';

import type { Project } from '@data/projects';

export const limeLauncher: Project = {
    route: 'limeLauncher',
    title: 'Lime Launcher',
    icon: Icon,
    poster: Poster,
    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        Screenshot4,
        // Screenshot5,
        // Screenshot6,
        // Screenshot7,
    ],
    subtitle: 'Clean and efficient Android launcher with strong privacy and no ads.',
    description: [
        'Introducing Lime Launcher - the minimalistic Android launcher that puts simplicity and efficiency first. With a clean and straightforward design, this launcher makes it easy to access and organize your apps.',
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.pinya.lime', icon: 'ri:android-fill' },
        { url: 'https://github.com/CarlesRojas/lime-launcher', icon: 'ri:github-fill' },
    ],
    qr: { url: 'https://play.google.com/store/apps/details?id=app.pinya.lime', src: Qr, srcInv: QrInv },
    process:
        'Lime Launcher was developed using Android Studio and available for download through the Google Play Store.',
    date: '2023-01-01',
    horizontal: false,
};
