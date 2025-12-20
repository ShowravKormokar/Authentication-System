"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.2, // Smooth scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
            smoothWheel: true,
            // smoothTouch: false, // Disable on touch devices for performance
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Setup ScrollTrigger with Lenis
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length && value !== undefined) {
                    lenis.scrollTo(value, { immediate: true });
                }
                return lenis.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });

        // Sync ScrollTrigger with Lenis
        const updateScrollTrigger = (time: number) => {
            lenis.raf(time);
            ScrollTrigger.update();
        };

        // Use requestAnimationFrame instead of gsap.ticker
        let rafId: number;
        const raf = (time: number) => {
            updateScrollTrigger(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Refresh ScrollTrigger when Lenis is ready
        lenis.on("scroll", ScrollTrigger.update);

        // Cleanup
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, []);

    return <>{children}</>;
}