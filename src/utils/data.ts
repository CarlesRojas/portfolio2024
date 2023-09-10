export const links = ['Home', 'Apps', 'Games', 'Skills', 'Experience'] as const;
export type LinkId = (typeof links)[number];

export type HomeAction = {
    link: string;
    icon: string;
    title?: string;
};
export const homeActions: HomeAction[] = [
    {
        link: 'assets/CarlesRojas_SoftwareDeveloper_CV.pdf',
        icon: 'ri:file-download-fill',
        title: 'Download CV',
    },
    {
        link: 'https://www.linkedin.com/in/carles-rojas/',
        icon: 'ri:linkedin-fill',
    },
    {
        link: 'https://github.com/CarlesRojas',
        icon: 'ri:github-fill',
    },
    {
        link: 'mailto:email@carlesrojas.com',
        icon: 'ri:mail-fill',
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
