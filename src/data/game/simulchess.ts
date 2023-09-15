import Icon from '@asset/simulchess/icon.png';
import Poster from '@asset/simulchess/poster.png';
import Qr from '@asset/simulchess/qr.png';
import QrInv from '@asset/simulchess/qr_inverted.png';
import Screenshot1 from '@asset/simulchess/screenshot1.png';
import Screenshot2 from '@asset/simulchess/screenshot2.png';
import Screenshot3 from '@asset/simulchess/screenshot3.png';
import Screenshot4 from '@asset/simulchess/screenshot4.png';
import Screenshot5 from '@asset/simulchess/screenshot5.png';
import Video from '@asset/simulchess/video.mp4';

import type { Project } from '@data/projects';

export const simulchess: Project = {
    route: 'simulchess',
    title: 'SimulChess',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],

    subtitle: 'A chess variant where turns are played simultaneously.',
    description: [
        'Your turn and the opponents happen at the same time. You have 60 seconds to decide your move. Missing it loses you the game. Once both players have decided, both moves will resolve simultaneously.',
        'If both moves end up in the same square, the player with precedence will capture the opponent’s piece. White starts having precedence, and it changes every turn.',
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.pinya.simulchess', icon: 'ri:android-fill' },
        { url: 'https://www.microsoft.com/store/apps/9N7L52DD9PFK', icon: 'ri:windows-fill' },
        { url: 'https://github.com/CarlesRojas/simulchess', icon: 'ri:github-fill' },
    ],
    qr: { url: 'https://simulchess.pinya.app/', src: Qr, srcInv: QrInv },
    video: Video,
    process:
        'SimulChess is a Progressive Web App made with ReactJS and PixiJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2022-07-01',
    horizontal: false,
};
