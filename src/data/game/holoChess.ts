import Icon from '@asset/holoChess/icon.png';
import Poster from '@asset/holoChess/poster.png';
import Screenshot1 from '@asset/holoChess/screenshot1.png';
import Screenshot2 from '@asset/holoChess/screenshot2.png';
import Screenshot3 from '@asset/holoChess/screenshot3.png';
import Screenshot4 from '@asset/holoChess/screenshot4.png';

import type { Project } from '@data/projects';

export const holoChess: Project = {
    route: 'holoChess',
    title: 'HoloChess',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],

    subtitle: 'The first holographic chess game ever.',
    description: [
        'Play against as AI with three difficulty levels and enjoy the classic game of chess in the augmented world. Choose your favorite style, place the board on your table and enjoy!',
    ],
    links: [{ url: 'https://www.microsoft.com/en-us/store/p/holochess-beta/9nblggh40d7c', icon: 'ri:windows-fill' }],

    process:
        'HoloChess is a game made with Unity targeting the HoloLens device by Microsoft. The distinctively styled chessboards and pieces have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
    date: '2016-11-01',
    horizontal: true,
    disabled: true,
};
