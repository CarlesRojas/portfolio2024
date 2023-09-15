import Icon from '@asset/rushSlide/icon.png';
import Poster from '@asset/rushSlide/poster.png';
import Qr from '@asset/rushSlide/qr.png';
import QrInv from '@asset/rushSlide/qr_inverted.png';
import Screenshot1 from '@asset/rushSlide/screenshot1.png';
import Screenshot2 from '@asset/rushSlide/screenshot2.png';
import Screenshot3 from '@asset/rushSlide/screenshot3.png';
import Screenshot4 from '@asset/rushSlide/screenshot4.png';
import Video from '@asset/rushSlide/video.mp4';

import type { Project } from '@data/projects';

export const rushSlide: Project = {
    route: 'rushSlide',
    title: 'Rush Slide',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    subtitle: 'Rush Hour is a puzzle game where players use strategy to escape a congested grid.',
    description: [
        'Rush Slide is a puzzle game that challenges players to manoeuvre a series of pieces in a congested grid, with the goal of creating a clear path for the red piece to exit the grid. Players must carefully shift the positions of the long and short pieces on the board, using logic and strategy to find the solution.',
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=app.vercel.rushslide', icon: 'ri:android-fill' },
        { url: 'https://www.microsoft.com/store/apps/9NJ1PDVTFVF1', icon: 'ri:windows-fill' },
        { url: 'https://github.com/CarlesRojas/rush-slide', icon: 'ri:github-fill' },
    ],
    qr: { url: 'https://rushslide.vercel.app/', src: Qr, srcInv: QrInv },
    video: Video,
    process:
        'Rush Slide is a cross-platform puzzle game that can be played on mobile, tablet, and desktop devices. It was developed using NextJS and TypeScript, and is available for download through the Google Play Store and Microsoft Store. iPhone users can also access the game by scanning a QR code and adding the website to their home screen.',
    date: '2022-12-01',
    horizontal: false,
};
