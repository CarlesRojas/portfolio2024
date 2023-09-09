export const links = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'] as const;

export type LinkId = (typeof links)[number];
