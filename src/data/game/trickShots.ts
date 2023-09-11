import Icon from '@asset/trickShots/icon.png';
import Poster from '@asset/trickShots/poster.png';
import Screenshot1 from '@asset/trickShots/screenshot1.png';
import Screenshot2 from '@asset/trickShots/screenshot2.png';
import Screenshot3 from '@asset/trickShots/screenshot3.png';
import Screenshot4 from '@asset/trickShots/screenshot4.png';

import type { Project } from '@data/projects';

export const trickShots: Project = {
    route: 'trickShots',
    title: 'TrickShots',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    subtitle: 'Augmented reality trick-shots using your room and virtual props.',
    description: [
        'Perform limitless trick shots with a holographic tennis ball that will interact with your surroundings. Add an assortment of different holographic objects like a basketball hoop, a paper bin or a couple of teleporting portals. Challenge yourself and achieve bigger combos to get the higher scores.',
    ],
    links: [{ url: 'https://www.microsoft.com/en-us/store/p/trickshots/9nkmv03xqcng', icon: 'ri:windows-fill' }],
    process:
        'TrickShots is a game made with Unity targeting the HoloLens device by Microsoft. The 3D holograms that can be placed into the world have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
    date: '2017-03-01',
    horizontal: true,
    disabled: true,
};
