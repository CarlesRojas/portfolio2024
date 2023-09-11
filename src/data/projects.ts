import { godHead } from '@data/app/godHead';
import { scoot } from '@data/app/scoot';

import { kubic } from '@data/game/kubic';

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

export const apps: Project[] = [scoot, godHead];
export const games: Project[] = [kubic];
