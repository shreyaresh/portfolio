import { useState } from 'react';
import PageNav from '../../modules/PageNav';
import Follow from '../../modules/Follow';
import ProjectsArt from '../../graphics/ProjectsArt';
import ProjectDetail from './ProjectDetail';
import ProjectIndex from './ProjectIndex';
import { PROJECTS } from './constants';
import '../../css/theme.css';
import "../../css/Projects.css";


const Projects = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [hoverId, setHoverId] = useState<string | null>(null);
    const active = PROJECTS.find((p) => p.id === activeId) ?? null;

    const select = (id: string) => setActiveId((cur) => (cur === id ? null : id));

    return (
        <div className="page projects">
            <div className="page-card">
                <PageNav />

                <div className="projects-body">
                    <div className="projects-copy">
                        {active ? (
                            <ProjectDetail key={active.id} project={active} total={PROJECTS.length} onClose={() => setActiveId(null)} />
                        ) : (
                            <ProjectIndex
                                projects={PROJECTS}
                                hoverId={hoverId}
                                onSelect={select}
                                onHover={setHoverId}
                            />
                        )}
                        <Follow />
                    </div>

                    <ProjectsArt
                        className="projects-art"
                        activeId={activeId}
                        hoverId={hoverId}
                        labels={Object.fromEntries(PROJECTS.map((p) => [p.id, p.title]))}
                        onSelect={select}
                        onHover={setHoverId}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
