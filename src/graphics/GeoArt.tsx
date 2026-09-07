import React from 'react';

// Bauhaus-style geometric composition for the home hero. Colors come from
// the --bauhaus-* CSS variables defined on the .page container.
const GeoArt = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {/* concrete block, top left */}
        <rect x="40" y="70" width="210" height="180" fill="var(--bauhaus-concrete)" />

        {/* red arch dropping from the top */}
        <path d="M225 0 H385 V290 A80 80 0 0 1 225 290 Z" fill="var(--bauhaus-red)" />

        {/* stacked ellipse outlines */}
        <g fill="none" stroke="var(--bauhaus-black)" strokeWidth="3">
            <ellipse cx="245" cy="80" rx="108" ry="26" />
            <ellipse cx="235" cy="150" rx="108" ry="26" />
            <ellipse cx="245" cy="220" rx="108" ry="26" />
            <ellipse cx="235" cy="290" rx="108" ry="26" />
        </g>

        {/* dot grids */}
        <g fill="var(--bauhaus-blue)">
            {Array.from({ length: 20 }, (_, i) => (
                <circle key={`d1-${i}`} cx={64 + (i % 5) * 14} cy={14 + Math.floor(i / 5) * 14} r="2.6" />
            ))}
            {Array.from({ length: 20 }, (_, i) => (
                <circle key={`d2-${i}`} cx={175 + (i % 5) * 14} cy={330 + Math.floor(i / 5) * 14} r="2.6" />
            ))}
        </g>

        {/* target, top right */}
        <g>
            <circle cx="520" cy="115" r="92" fill="var(--bauhaus-black)" />
            <path d="M520 23 A92 92 0 0 1 520 207 Z" fill="var(--bauhaus-blue)" />
            <circle cx="528" cy="122" r="46" fill="var(--bauhaus-yellow)" />
            <circle cx="532" cy="126" r="29" fill="var(--bauhaus-gold)" />
            <circle cx="530" cy="124" r="16" fill="var(--bauhaus-red)" />
            <circle cx="428" cy="222" r="13" fill="var(--bauhaus-yellow)" />
        </g>

        {/* concrete block, mid right */}
        <rect x="430" y="240" width="185" height="140" fill="var(--bauhaus-concrete)" />

        {/* stair-step line */}
        <polyline
            points="628,180 628,236 576,236 576,290 524,290 524,344 472,344"
            fill="none"
            stroke="var(--bauhaus-black)"
            strokeWidth="3"
        />

        {/* red stripes */}
        <rect x="556" y="300" width="20" height="130" fill="var(--bauhaus-red)" />
        <rect x="592" y="300" width="20" height="130" fill="var(--bauhaus-red)" />

        {/* black quarter circle */}
        <path d="M258 330 A74 74 0 0 1 332 256 V330 Z" fill="var(--bauhaus-black)" />

        {/* horizontal rules */}
        <g stroke="var(--bauhaus-black)" strokeWidth="3">
            <line x1="250" y1="368" x2="410" y2="368" />
            <line x1="250" y1="382" x2="410" y2="382" />
            <line x1="250" y1="396" x2="410" y2="396" />
            <line x1="250" y1="410" x2="410" y2="410" />
        </g>

        {/* concrete arch, bottom left */}
        <path d="M110 545 V435 A66 66 0 0 1 242 435 V545 Z" fill="var(--bauhaus-concrete)" />

        {/* yellow half-moon with dots */}
        <path d="M175 545 A128 128 0 0 1 431 545 Z" fill="var(--bauhaus-yellow)" />
        <g fill="var(--bauhaus-black)">
            <circle cx="245" cy="505" r="13" />
            <circle cx="303" cy="505" r="13" />
            <circle cx="361" cy="505" r="13" />
            <circle cx="419" cy="505" r="13" />
        </g>

        {/* blue squares with gold overlap */}
        <rect x="400" y="330" width="132" height="132" fill="var(--bauhaus-blue)" />
        <rect x="440" y="402" width="72" height="72" fill="var(--bauhaus-gold)" />
        <rect x="472" y="428" width="120" height="120" fill="var(--bauhaus-blue)" />
    </svg>
);

export default GeoArt;
