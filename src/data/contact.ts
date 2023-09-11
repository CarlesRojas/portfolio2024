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
] as const;
