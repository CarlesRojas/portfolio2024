import Icon from '@asset/portal/icon.png';
import Poster from '@asset/portal/poster.png';
import Screenshot1 from '@asset/portal/screenshot1.png';
import Screenshot2 from '@asset/portal/screenshot2.png';
import Screenshot3 from '@asset/portal/screenshot3.png';
import Screenshot4 from '@asset/portal/screenshot4.png';

import type { Project } from '@data/projects';

export const portal: Project = {
    route: 'portal',
    title: 'Portal',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    subtitle: 'A Portal inspired game, but 2D and using pixel art.',
    description: [
        'Solve Portal-like puzzles in 2D. Create your own levels with an intuitive in-game tool and share them. You can play any level in the game as well as the ones created by the community.',
    ],
    links: [],
    process:
        'Portal is a work in progress game made with Unity targeting Windows devices. The sprites were created using Photoshop and Illustrator. The game is coded in C# and is not yet available.',
    date: '2019-07-01',
    horizontal: true,
};
