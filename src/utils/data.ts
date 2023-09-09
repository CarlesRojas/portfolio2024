export const links = ['Home', 'Apps', 'Games', 'Skills', 'Experience'] as const;

export type LinkId = (typeof links)[number];
