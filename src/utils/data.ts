export type LinkIcon = 'Github' | 'Android' | 'Windows' | 'Hololens' | 'Itchio';

export interface Project {
    route: string;
    title: string;
    subtitle: string;
    description: string[];
    links: { url: string; icon: LinkIcon }[];
    qr: string | false;
    videoPosition: number;
    video: boolean;
    numberOfScreenshots: number;
    process: string;
    date: Date;
    horizontal: boolean;
}

export const MEDIA_URL = '/asset';
