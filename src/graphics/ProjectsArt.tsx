import React from 'react';
import { PROJECT_SHAPE_IDS, ProjectShapeId } from './constants';

// Interactive Bauhaus composition for the projects page. Each pshape group is
// one project; decorative elements are aria-hidden. Colors come from the
// --bauhaus-* CSS variables defined on the .page container.

type Props = {
    className?: string;
    activeId: string | null;
    hoverId: string | null;
    labels: Record<string, string>;
    onSelect: (id: string) => void;
    onHover: (id: string | null) => void;
};

const ProjectsArt = ({ className, activeId, hoverId, labels, onSelect, onHover }: Props) => {
    const onKey = (e: React.KeyboardEvent, id: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(id);
        }
    };
    const shapeProps = (id: ProjectShapeId) => ({
        className: `pshape u-pointer${activeId === id ? ' is-active' : ''}${hoverId === id ? ' is-hover' : ''}`,
        role: 'button' as const,
        tabIndex: 0,
        'aria-label': labels[id] ?? id,
        'aria-pressed': activeId === id,
        onClick: () => onSelect(id),
        onKeyDown: (e: React.KeyboardEvent) => onKey(e, id),
        onMouseEnter: () => onHover(id),
        onMouseLeave: () => onHover(null),
        onFocus: () => onHover(id),
        onBlur: () => onHover(null),
    });

    return (
        <svg
            className={`${className ?? ''}${activeId ? ' has-active' : ''}`}
            viewBox="0 0 640 560"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* --- decorative, non-interactive --- */}
            <g fill="var(--bauhaus-blue)" aria-hidden="true">
                {Array.from({ length: 20 }, (_, i) => (
                    <circle key={`d1-${i}`} cx={310 + (i % 5) * 14} cy={30 + Math.floor(i / 5) * 14} r="2.6" />
                ))}
                {Array.from({ length: 20 }, (_, i) => (
                    <circle key={`d2-${i}`} cx={60 + (i % 5) * 14} cy={330 + Math.floor(i / 5) * 14} r="2.6" />
                ))}
            </g>
            <rect x="40" y="60" width="170" height="150" fill="var(--bauhaus-concrete)" aria-hidden="true" />
            <rect x="410" y="270" width="180" height="120" fill="var(--bauhaus-concrete)" aria-hidden="true" />
            <polyline
                points="620,60 620,116 568,116 568,172 516,172 516,228"
                fill="none"
                stroke="var(--bauhaus-black)"
                strokeWidth="3"
                aria-hidden="true"
            />
            <g stroke="var(--bauhaus-black)" strokeWidth="3" aria-hidden="true">
                <line x1="290" y1="300" x2="450" y2="300" />
                <line x1="290" y1="314" x2="450" y2="314" />
                <line x1="290" y1="328" x2="450" y2="328" />
            </g>
            <circle cx="264" cy="146" r="12" fill="var(--bauhaus-gold)" aria-hidden="true" />

            {/* --- 05: red stripes --- */}
            <g {...shapeProps('stripes')}>
                <rect x="300" y="120" width="14" height="100" fill="var(--bauhaus-red)" />
                <rect x="324" y="120" width="14" height="100" fill="var(--bauhaus-red)" />
                <rect x="348" y="120" width="14" height="100" fill="var(--bauhaus-red)" />
                <text className="pshape-num" x="331" y="252" fill="var(--bauhaus-black)">05</text>
            </g>

            {/* --- 06: black quarter circle --- */}
            <g {...shapeProps('quarter')}>
                <path d="M45 478 A88 88 0 0 1 133 390 V478 Z" fill="var(--bauhaus-black)" />
                <text className="pshape-num" x="103" y="462" fill="var(--bauhaus-cream)">06</text>
            </g>

            {/* --- 07: gold ring --- */}
            <g {...shapeProps('ring')}>
                <circle cx="330" cy="393" r="36" fill="var(--bauhaus-gold)" stroke="var(--bauhaus-black)" strokeWidth="3" />
                <text className="pshape-num" x="330" y="402" fill="var(--bauhaus-black)">07</text>
            </g>

            {/* --- 01: red arch --- */}
            <g {...shapeProps('arch')}>
                <path d="M100 40 H240 V300 A70 70 0 0 1 100 300 Z" fill="var(--bauhaus-red)" />
                <ellipse cx="170" cy="120" rx="92" ry="22" fill="none" stroke="var(--bauhaus-black)" strokeWidth="3" />
                <ellipse cx="162" cy="190" rx="92" ry="22" fill="none" stroke="var(--bauhaus-black)" strokeWidth="3" />
                <text className="pshape-num" x="170" y="272" fill="var(--bauhaus-cream)">01</text>
            </g>

            {/* --- 02: target --- */}
            <g {...shapeProps('target')}>
                <circle cx="470" cy="140" r="95" fill="var(--bauhaus-black)" />
                <path d="M470 45 A95 95 0 0 1 470 235 Z" fill="var(--bauhaus-blue)" />
                <circle cx="478" cy="147" r="48" fill="var(--bauhaus-yellow)" />
                <circle cx="482" cy="151" r="30" fill="var(--bauhaus-gold)" />
                <circle cx="480" cy="149" r="16" fill="var(--bauhaus-red)" />
                <text className="pshape-num" x="470" y="88" fill="var(--bauhaus-cream)">02</text>
            </g>

            {/* --- 03: yellow half-moon --- */}
            <g {...shapeProps('moon')}>
                <path d="M120 545 A130 130 0 0 1 380 545 Z" fill="var(--bauhaus-yellow)" />
                <circle cx="190" cy="505" r="13" fill="var(--bauhaus-black)" />
                <circle cx="250" cy="505" r="13" fill="var(--bauhaus-black)" />
                <circle cx="310" cy="505" r="13" fill="var(--bauhaus-black)" />
                <text className="pshape-num" x="250" y="470" fill="var(--bauhaus-black)">03</text>
            </g>

            {/* --- 04: blue squares --- */}
            <g {...shapeProps('squares')}>
                <rect x="430" y="330" width="130" height="130" fill="var(--bauhaus-blue)" />
                <rect x="468" y="400" width="72" height="72" fill="var(--bauhaus-gold)" />
                <rect x="500" y="426" width="115" height="115" fill="var(--bauhaus-blue)" />
                <text className="pshape-num" x="495" y="372" fill="var(--bauhaus-cream)">04</text>
            </g>
        </svg>
    );
};

export default ProjectsArt;
