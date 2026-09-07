export type ProjectSection = 'Braze' | 'Personal';

export type Project = {
    id: string;
    num: string;
    title: string;
    section: ProjectSection;
    blurb: string;
    tags: string[];
    link?: string;
};
