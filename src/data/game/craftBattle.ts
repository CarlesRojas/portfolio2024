import Icon from '@asset/craftBattle/icon.png';
import Poster from '@asset/craftBattle/poster.png';
import Qr from '@asset/craftBattle/qr.png';
import QrInv from '@asset/craftBattle/qr_inverted.png';
import Screenshot1 from '@asset/craftBattle/screenshot1.png';
import Screenshot2 from '@asset/craftBattle/screenshot2.png';
import Screenshot3 from '@asset/craftBattle/screenshot3.png';
import Screenshot4 from '@asset/craftBattle/screenshot4.png';
import Screenshot5 from '@asset/craftBattle/screenshot5.png';

import type { Project } from '@data/projects';

export const craftBattle: Project = {
    route: 'craftBattle',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    title: 'Craft Battle',
    subtitle: 'Combine words to discover new ones and battle other players online.',
    description: [
        'Experiment with endless word combinations in single-player mode and discover new words through chain reactions and crafting mechanics.',
        'Compete online in fast-paced 1v1 matches where players start with 5 random words and race to craft 3 valid combinations before their opponent.'
    ],
    links: [{ url: 'https://github.com/CarlesRojas/craft-battle', icon: 'ri:github-fill' }],
    qr: { url: 'https://craftbattle.app/', src: Qr, srcInv: QrInv },
    process:
        'Craft Battle is a multiplayer word crafting game built with React 19, TanStack Start, TypeScript, Convex, and Tailwind CSS. It features real-time online gameplay, animated interactions powered by React Spring and OGL, AI-assisted word generation, and a responsive mobile-first Progressive Web App experience.',
    date: '2025-11-01',
    horizontal: false
};
