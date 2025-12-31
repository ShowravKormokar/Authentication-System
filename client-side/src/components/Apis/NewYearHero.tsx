"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NewYearHero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hello-text", {
            yPercent: 120,
            opacity: 0,
            duration: 1.2,
        })

            .from(
                ".year-2025",
                {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.6,
                },
                "-=0.2"
            )

            .from(
                ".year-2026",
                {
                    yPercent: 100,
                    scale: 0.6,
                    opacity: 0,
                    duration: 0.9,
                },
                "-=0.1"
            )

            .to(".year-2026", {
                scale: 1.05,
                duration: 0.25,
                yoyo: true,
                repeat: 1,
            });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-screen h-dvh text-center content-center leading-[0.95]"
        >
            <h1 className="text-[11vw] font-extrabold overflow-hidden">
                <span className="hello-text inline-block">
                    <span className="text-orange-400">Hello</span>, World!
                </span>
            </h1>

            <h1 className="text-[13vw] font-extrabold">
                <del className="year-2025 text-black inline-block mr-4">
                    2025
                </del>
                <span className="year-2026 text-orange-400 inline-block">
                    2026
                </span>
            </h1>
        </section>
    );
};