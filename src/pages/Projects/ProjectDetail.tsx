import React from 'react';
import { Project } from '../../types';
import '../../css/theme.css';

// Active state of the projects panel: one selected project's details.
type Props = {
    project: Project;
    total: number;
    onClose: () => void;
};

const ProjectDetail = ({ project, total, onClose }: Props) => (
    <div className="projects-detail">
        <span className="projects-num">{project.section} &middot; {project.num} / {String(total).padStart(2, '0')}</span>
        <h1 className="projects-title u-cursorText">{project.title}</h1>
        <p className="projects-blurb u-cursorText">{project.blurb}</p>
        <ul className="projects-tags">
            {project.tags.map((t) => (
                <li key={t}>{t}</li>
            ))}
        </ul>
        <div className="projects-actions">
            {project.link && (
                <a className="page-cta u-pointer" href={project.link} target="_blank" rel="noreferrer">
                    View Project
                </a>
            )}
            <button className="projects-close u-pointer" onClick={onClose}>
                &larr; All projects
            </button>
        </div>
    </div>
);

export default ProjectDetail;
