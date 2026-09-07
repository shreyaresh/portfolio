import React, { useEffect, useRef } from 'react';
import { CLICKABLE } from './constants';
import '../css/Cursor.css';

const Cursor = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (
            !el ||
            typeof window.matchMedia !== 'function' ||
            !window.matchMedia('(pointer: fine)').matches
        ) return;

        const onMove = (e: MouseEvent) => {
            el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            el.classList.add('is-visible');
            const target = e.target as Element | null;
            el.classList.toggle('is-hover', !!target?.closest?.(CLICKABLE));
        };
        const onLeave = () => el.classList.remove('is-visible');
        const onDown = () => el.classList.add('is-down');
        const onUp = () => el.classList.remove('is-down');

        document.addEventListener('mousemove', onMove);
        document.documentElement.addEventListener('mouseleave', onLeave);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.documentElement.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
        };
    }, []);

    return (
        <div className="cursor" ref={ref} aria-hidden="true">
            <div className="cursor-dot" />
        </div>
    );
};

export default Cursor;
