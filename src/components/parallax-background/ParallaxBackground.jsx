import { useEffect, useRef } from "react";
import "./parallax-background.css";
import { default as DragonMark } from "../../media/logo.svg";

const ParallaxBackground = ({ scrollContainerRef, speed = 0.25, maxOffset = 260 }) => {
    const logoRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || !logoRef.current) return;

        let ticking = false;
        const applyOffset = () => {
            // Soft-clamped with tanh: moves ~linearly near the top (where the
            // motion actually reads as parallax) but eases toward maxOffset
            // instead of drifting further, so the artwork never scrolls off
            // and leaves a blank gap on very long pages.
            const raw = container.scrollTop * speed;
            const offset = maxOffset * Math.tanh(raw / maxOffset);
            logoRef.current.style.transform = `translate3d(-50%, calc(-50% + ${offset}px), 0)`;
            ticking = false;
        };

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(applyOffset);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, [scrollContainerRef, speed, maxOffset]);

    return (
        <div className="parallax-background">
            <img ref={logoRef} src={DragonMark} className="parallax-background__logo" alt="" aria-hidden="true" />
        </div>
    );
};

export default ParallaxBackground;
