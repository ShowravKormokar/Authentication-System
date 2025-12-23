"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { start } from "node:repl";

const BounceText = ({ text }: { text: string }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !titleRef.current) return;

        gsap.set(titleRef.current, {
            x: "100vw",
        });

        const titleWidth = titleRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const finalPosition = -(titleWidth - viewportWidth / 2);

        const splitText = SplitText.create(titleRef.current, { type: "chars" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom 30%",
                scrub: 1,
                pin: containerRef.current,
                pinSpacing: false,
                invalidateOnRefresh: true,
                // markers: true
            }
        });

        gsap.set(splitText.chars, {
            yPercent: () => gsap.utils.random(-250, 250),
            rotation: () => gsap.utils.random(-30, 30),
        });

        tl.to(titleRef.current, {
            x: finalPosition,
            duration: 1.4,
            ease: "none"
        });

        tl.to(splitText.chars,
            {
                yPercent: 0,
                rotation: 0,
                duration: 0.4,
                stagger: {
                    amount: 1,
                },
                ease: "black.out(2)",
            },
            0
        );
    }
        , { scope: containerRef }
    );

    return (
        <section className="relative w-screen h-[170vh] border border-amber-500">
            <div ref={containerRef} className="relative flex h-screen items-center overflow-hidden">
                <h1 ref={titleRef} className="text-[15vw] font-bold whitespace-nowrap will-change-transform lg:text-[9vw]">{text}</h1>
                <div className="absolute bottom-24 flex w-full justify-center text-center">
                    <p className="px-5 text-center text-xl lg:max-w-[50vw]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In asperiores reprehenderit rem aut inventore culpa esse sint ipsam possimus recusandae.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default BounceText;