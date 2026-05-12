import { cozyBooks } from '@data/app/cozyBooks';
import { covid19 } from '@data/app/covid19';
import { gitGo } from '@data/app/gitGo';
import { godHead } from '@data/app/godHead';
import { juegology } from '@data/app/juegology';
import { limeLauncher } from '@data/app/limeLauncher';
import { spellbook } from '@data/app/spellbook';
import { cueNext } from '@data/app/cueNext';

import { kubic } from '@data/game/kubic';
import { letsDrive } from '@data/game/letsDrive';
import { neoWar } from '@data/game/neoWar';
import { portal } from '@data/game/portal';
import { rushSlide } from '@data/game/rushSlide';
import { simulchess } from '@data/game/simulchess';
import { craftBattle } from '@data/game/craftBattle';

export type Project = {
    route: string;
    poster: ImageMetadata;
    icon: ImageMetadata;
    screenshots: ImageMetadata[];
    title: string;
    subtitle: string;
    description: string[];
    links: {
        url: string;
        icon: string;
    }[];
    qr?: {
        url: string;
        src: ImageMetadata;
        srcInv: ImageMetadata;
    };
    video?: string;
    process: string;
    date: string;
    horizontal: boolean;
    disabled?: boolean;
};

export const apps: Project[] = [cueNext, gitGo, spellbook, juegology, cozyBooks, limeLauncher];
export const games: Project[] = [craftBattle, kubic, neoWar, portal, rushSlide, simulchess];
