import { bookly } from '@data/app/bookly';
import { covid19 } from '@data/app/covid19';
import { fanfastic } from '@data/app/fanfastic';
import { godHead } from '@data/app/godHead';
import { limeLauncher } from '@data/app/limeLauncher';
import { scoot } from '@data/app/scoot';

import { kubic } from '@data/game/kubic';
import { letsDrive } from '@data/game/letsDrive';
import { neoWar } from '@data/game/neoWar';
import { portal } from '@data/game/portal';
import { rushSlide } from '@data/game/rushSlide';
import { simulchess } from '@data/game/simulchess';

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

export const apps: Project[] = [scoot, godHead, bookly, covid19, fanfastic, limeLauncher];
export const games: Project[] = [kubic, letsDrive, neoWar, portal, rushSlide, simulchess];
