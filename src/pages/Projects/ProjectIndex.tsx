import React from 'react';
import { Project, ProjectSection } from '../../types';
import '../../css/theme.css';

// Dormant state of the projects panel: intro copy plus the clickable index,
// hover-linked to the shapes in the composition.
type Props = {
    projects: Project[];
    hoverId: string | null;
    onSelect: (id: string) => void;
    onHover: (id: string | null) => void;
};

const ProjectIndex = ({ projects, hoverId, onSelect, onHover }: Props) => (
    <div className="projects-detail">
        <h1 className="projects-title u-cursorText">Projects</h1>
        <p className="projects-blurb u-cursorText">
            By day, I&rsquo;m a Software Engineer at Braze &mdash; TypeScript/React
            on the frontend, Ruby on the backend. Every project is a piece of the
            composition. Pick one &mdash; by title, or by shape.
        </p>
        {(['Braze', 'Personal'] as ProjectSection[]).map((section) => (
            <section key={section}>
                <h2 className="projects-sectionLabel u-cursorText">{section}</h2>
                <ul className="projects-list">
                    {projects.filter((p) => p.section === section).map((p) => (
                        <li key={p.id}>
                            <button
                                className={`projects-listItem u-pointer${hoverId === p.id ? ' is-hover' : ''}`}
                                onClick={() => onSelect(p.id)}
                                onMouseEnter={() => onHover(p.id)}
                                onMouseLeave={() => onHover(null)}
                            >
                                <span className="projects-listNum">{p.num}</span>
                                {p.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        ))}
    </div>
);

export default ProjectIndex;
