export const links = ['Home', 'Apps', 'Games', 'Skills', 'Experience'] as const;
export type LinkId = (typeof links)[number];

type ContactAction = {
    link: string;
    icon: string;
    label: string;
    title?: string;
};
export const contactActions: ContactAction[] = [
    {
        link: 'https://www.linkedin.com/in/carles-rojas/',
        label: 'Visit my LinkedIn profile',
        icon: 'ri:linkedin-fill',
    },
    {
        link: 'https://github.com/CarlesRojas',
        label: 'Visit my GitHub profile',
        icon: 'ri:github-fill',
    },
    {
        link: 'mailto:email@carlesrojas.com',
        label: 'Send me an email',
        icon: 'ri:mail-fill',
    },
    {
        link: 'assets/CarlesRojas_SoftwareDeveloper_CV.pdf',
        label: 'Download CV',
        icon: 'ri:file-download-fill',
        title: 'Download CV',
    },
];

export enum LinkType {
    GITHUB = 'github',
    ANDROID = 'android',
    WINDOWS = 'windows',
    HOLOLENS = 'hololens',
    ITCHIO = 'itchio',
    PDF = 'pdf',
}

export interface Project {
    route: string;
    title: string;
    subtitle: string;
    description: string[];
    links: { url: string; type: LinkType }[];
    qr: string | false;
    videoPosition: number;
    video: boolean;
    numberOfScreenshots: number;
    process: string;
    date: Date;
}

export const MEDIA_URL = 'https://portfoliomedia.s3.eu-west-1.amazonaws.com';

export interface Experience {
    title: string;
    place: string;
    date: string;
    icon: string;
    description: string[];
}

export interface Skill {
    label: string;
    icon?: string;
}
