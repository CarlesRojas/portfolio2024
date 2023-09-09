import { links, type LinkId } from "../data";
import { useState, useEffect, useRef, useMemo } from "react";
import { useAutoResetState } from "./useAutoResetState";

export const useActiveSection = () => {
    const [activeSections, setActiveSections] = useState(links.map((_, i) => i === 0));
    const [clickedSection, setClickedSection] = useAutoResetState(null, 1000);

    const observer = useRef<IntersectionObserver | null>(null);

    const onIntersectionChange = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const index = links.indexOf(entry.target.id as LinkId);

            setActiveSections((prev) => {
                const next = [...prev];
                next[index] = entry.isIntersecting;
                return next;
            });
        });
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(onIntersectionChange, {
            rootMargin: "0px",
            threshold: 0.5,
        });

        links.forEach((link) => {
            const el = document.getElementById(link);
            el && observer.current?.observe(el);
        });
    }, []);

    const isLastLinkActive = activeSections[activeSections.length - 1] ? links[activeSections.length - 1] : null;

    const activeSection = useMemo(
        () => clickedSection ?? isLastLinkActive ?? links[activeSections.findIndex((active) => active)],
        [clickedSection, isLastLinkActive, activeSections]
    );

    return { activeSection, setClickedSection };
};