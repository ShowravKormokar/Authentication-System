"use client";

import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function TransitionProvider({ children }: { children?: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(".tranblock", { scaleY: 0, transformOrigin: "top" });
        gsap.set(".block2", { scaleY: 0, transformOrigin: "bottom" });

        // Cleanup function
        return () => {
            gsap.killTweensOf(".tranblock");
            gsap.killTweensOf(".block2");
        };
    }, []);

    return (
        <TransitionRouter
            auto
            leave={(next) => {
                gsap.set(containerRef.current, { pointerEvents: "auto" });

                const ttl = gsap.to(".tranblock", {
                    scaleY: 1,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power4.inOut",
                    onComplete: next,
                });

                return () => ttl.kill();
            }}
            enter={(next) => {
                // Clear any ongoing GSAP animations before starting new ones
                gsap.killTweensOf(".tranblock");

                const ttl = gsap.to(".tranblock", {
                    scaleY: 0,
                    duration: 0.8,
                    delay: 0.2,
                    stagger: 0.05,
                    ease: "power4.inOut",
                    onComplete: () => {
                        gsap.set(containerRef.current, { pointerEvents: "none" });
                        next();
                    },
                });

                return () => ttl.kill();
            }}
        >
            {/* TRANSITION LAYER */}
            <div
                ref={containerRef}
                className="fixed inset-0 z-9999 pointer-events-none flex flex-col"
            >
                <div className="flex flex-1 -mx-[0.5px]"> {/* Negative margin */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={`top-${i}`}
                            className="tranblock flex-1 bg-black origin-top"
                        />
                    ))}
                </div>
                <div className="flex flex-1 -mx-[0.5px] gap-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={`bottom-${i}`}
                            className="tranblock block2 flex-1 bg-black origin-bottom"
                        />
                    ))}
                </div>
            </div>

            {children}
        </TransitionRouter>
    );
}