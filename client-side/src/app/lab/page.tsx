"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CONTENT_SECTION = [
    ["INFINITY"],
    ["DISCOVERY", "WONDER", "EXPLORATION"],
    ["ENDURING", "SUPREME", "ELOQUENT"],
    ["TIMELESS", "REFINED", "BRILLIANT"],
    ["HARMONY", "SEAMLESS"]
];

export default function Lab() {
    const abContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                {
                    isDesktop: "(min-width: 1024px)",
                    isMobile: "(max-width: 1023px)"
                },
                (context) => {
                    const { isDesktop } = context.conditions ?? {};

                    const texts = gsap.utils.toArray<HTMLElement>(".animated-text");
                    const contentCon = abContainerRef.current?.querySelector(".content-container");
                    if (!contentCon) return;

                    const minX = isDesktop ? 192 : 0;
                    const maxX = isDesktop ? 511 : 150;
                    const range = maxX - minX;
                    const waveNumber = 0.5;

                    const setters = texts.map(text =>
                        gsap.quickTo(text, "x", {
                            duration: 0.75,
                            ease: "power4.out"
                        })
                    );

                    texts.forEach((text, i) => {
                        const phase = waveNumber * i - Math.PI / 2;
                        const wave = Math.sin(phase);
                        const progress = (wave + 1) / 2;
                        gsap.set(text, { x: minX + progress * range });
                    });

                    ScrollTrigger.create({
                        trigger: contentCon,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        onUpdate(self) {
                            const centerY = window.innerHeight / 2;
                            let closest = 0;
                            let minDist = Infinity;

                            texts.forEach((el, i) => {
                                const rect = el.getBoundingClientRect();
                                const dist = Math.abs(rect.top + rect.height / 2 - centerY);
                                if (dist < minDist) {
                                    minDist = dist;
                                    closest = i;
                                }
                            });

                            texts.forEach((el, i) => {
                                const phase =
                                    waveNumber * i +
                                    closest +
                                    self.progress * Math.PI * 2 -
                                    Math.PI / 2;

                                const wave = Math.sin(phase);
                                const progress = (wave + 1) / 2;
                                setters[i](minX + progress * range);

                                el.classList.toggle("text-primary", i === closest);
                                el.classList.toggle("text-[#aaa]", i !== closest);
                            });
                        }
                    });
                }
            );
        },
        { scope: abContainerRef }
    );

    return (
        <section ref={abContainerRef}>
            <div className="h-[50vh]" />

            <div className="content-container flex flex-col gap-5 pb-24 text-[9vw] leading-none font-semibold lg:gap-16 lg:text-[4vw]">
                {CONTENT_SECTION.map((group, i) => (
                    <div key={i}>
                        {group.map((text, j) => (
                            <div
                                key={j}
                                className="animated-text w-max transition-colors duration-150"
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="h-screen" />
        </section>
    );
}