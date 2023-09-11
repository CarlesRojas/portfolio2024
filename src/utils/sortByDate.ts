import type { Project } from '@data/projects';

export const sortByDate = (a: Project, b: Project) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
};
