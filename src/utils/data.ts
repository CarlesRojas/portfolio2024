export const links = [
    { name: 'Home', hash: 'home' },
    { name: 'Apps', hash: 'apps' },
    { name: 'Games', hash: 'games' },
    { name: 'Skills', hash: 'skills' },
    { name: 'Experience', hash: 'experience' },
] as const;

export type LinkId = (typeof links)[number]['hash'];

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
        link: 'https://portfoliomedia.s3.eu-west-1.amazonaws.com/CarlesRojas_SoftwareDeveloper_CV.pdf',
        label: 'Download CV',
        icon: 'ri:file-download-fill',
        title: 'Download CV',
    },
];

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
