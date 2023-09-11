import Icon from '@asset/spot/icon.png';
import Poster from '@asset/spot/poster.png';
import Screenshot1 from '@asset/spot/screenshot1.png';
import Screenshot2 from '@asset/spot/screenshot2.png';
import Screenshot3 from '@asset/spot/screenshot3.png';
// import Screenshot4 from '@asset/spot/screenshot4.png';
// import Screenshot5 from '@asset/spot/screenshot5.png';
// import Screenshot6 from '@asset/spot/screenshot6.png';
import Video from '@asset/spot/video.mp4';

import type { Project } from '@data/projects';

export const spot: Project = {
    route: 'spot',
    title: 'Spot',
    icon: Icon,
    poster: Poster,

    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        // Screenshot4,
        // Screenshot5,
        // Screenshot6,
    ],
    subtitle: 'A minimal and traditional client for Spotify.',
    description: [
        'Spot is an app that connects to your current Spotify account and lets you explore your music using a traditional library with a minimalistic design.',
    ],
    links: [
        { url: 'https://github.com/CarlesRojas/Spot2', icon: 'ri:github-fill' },
        { url: 'https://github.com/CarlesRojas/Spot-Server', icon: 'ri:github-fill' },
    ],
    video: Video,
    process: 'Spot is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
    date: '2021-08-01',
    horizontal: false,
    disabled: true,
};
