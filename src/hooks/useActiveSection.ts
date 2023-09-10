import { useAutoResetState } from '@hooks/useAutoResetState';
import { links } from '@utils/data';
import { useEffect, useMemo, useRef, useState } from 'react';

export const useActiveSection = () => {
    const [activeSections, setActiveSections] = useState(links.map((_, i) => i === 0));
    const [clickedSection, setClickedSection] = useAutoResetState(null, 1000);

    const observer = useRef<IntersectionObserver | null>(null);

    const onIntersectionChange = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const index = links.findIndex(({ hash }) => entry.target.id === hash);

            setActiveSections((prev) => {
                const next = [...prev];
                next[index] = entry.isIntersecting;
                return next;
            });
        });
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(onIntersectionChange, {
            rootMargin: '0px',
            threshold: 0.3,
        });

        links.forEach(({ hash }) => {
            const el = document.getElementById(hash);
            el && observer.current?.observe(el);
        });
    }, []);

    const activeSection = useMemo(
        () => clickedSection ?? links[activeSections.findIndex((active) => active)] ?? links[links.length - 1],
        [clickedSection, activeSections]
    );

    return { activeSection, setClickedSection };
};
