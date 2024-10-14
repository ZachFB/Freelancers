import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (threshold: number = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Déconnecte l'observateur après qu'il a détecté l'élément
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsVisible(false);
                if (currentRef) {
                    observer.observe(currentRef); // Réinitialise l'observateur
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Appel premier de l'observateur
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return { ref, isVisible };
};