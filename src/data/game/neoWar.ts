import Icon from '@asset/neoWar/icon.png';
import Poster from '@asset/neoWar/poster.png';
import Screenshot1 from '@asset/neoWar/screenshot1.png';
import Screenshot2 from '@asset/neoWar/screenshot2.png';
import Screenshot3 from '@asset/neoWar/screenshot3.png';
import Screenshot4 from '@asset/neoWar/screenshot4.png';
import Screenshot5 from '@asset/neoWar/screenshot5.png';
import Screenshot6 from '@asset/neoWar/screenshot6.png';
import Video from '@asset/neoWar/video.mp4';

import type { Project } from '@data/projects';

export const neoWar: Project = {
    route: 'neoWar',
    title: 'NeoWar',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5, Screenshot6],
    subtitle: 'Avoid the endless stream of neon enemies coming at you!',
    description: [
        'Control your neon spaceship and shoot down the opposition trying to bring you down. Grab powerups to help you get out of sticky situations and hang on as much as possible.',
    ],
    links: [
        { url: 'https://pinyagames.itch.io/neowar', icon: 'ri:gamepad-fill' },
        { url: 'https://github.com/CarlesRojas/Neowar', icon: 'ri:github-fill' },
    ],
    video: Video,
    process:
        'NeoWar is a game made with Unity targeting Windows devices. It was developed alongside Jaume Ballester and Santi Rubio. It was coded in C# and can be played online.',
    date: '2020-01-01',
    horizontal: true,
};
