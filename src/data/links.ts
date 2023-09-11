export const links = [
    { name: 'Home', hash: 'home' },
    { name: 'Apps', hash: 'apps' },
    { name: 'Games', hash: 'games' },
    { name: 'Skills', hash: 'skills' },
    { name: 'Experience', hash: 'experience' },
] as const;

export type LinkId = (typeof links)[number]['hash'];
