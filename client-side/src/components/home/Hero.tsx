"use client";
import { useGSAP } from '@gsap/react';
import { RiAddLine, RiCloseLine } from '@remixicon/react';
import gsap from 'gsap/all';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(SplitText);

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const splitTextRef = useRef<SplitText | null>(null);
    const splitText2Ref = useRef<SplitText | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Check if fonts are loaded
        document.fonts.ready.then(() => {
            setIsLoaded(true);
        });

        // Cleanup on unmount
        return () => {
            if (tlRef.current) tlRef.current.kill();
            if (splitTextRef.current) splitTextRef.current.revert();
            if (splitText2Ref.current) splitText2Ref.current.revert();

            // Reset elements to default state
            gsap.set('.hero-text, .hero-text2', { clearProps: "all" });
            gsap.set('.hero-text div, .hero-text2 div', {
                clearProps: "all",
                transform: "none",
                clipPath: "none"
            });
        };
    }, []);

    useGSAP(() => {
        if (!isLoaded) return;

        // Clean up previous instances
        if (splitTextRef.current) splitTextRef.current.revert();
        if (splitText2Ref.current) splitText2Ref.current.revert();
        if (tlRef.current) tlRef.current.kill();

        // Reset elements before creating new SplitText
        gsap.set('.hero-text, .hero-text2', {
            transform: "scale(1, 1)",
            opacity: 1
        });

        splitTextRef.current = new SplitText(".hero-text", {
            type: "chars",
            charsClass: "hero-char",
            linesClass: "hero-line"
        });

        splitText2Ref.current = new SplitText(".hero-text2", {
            type: "chars",
            charsClass: "hero-char2",
            linesClass: "hero-line2"
        });

        tlRef.current = gsap.timeline();

        tlRef.current.from(splitTextRef.current.chars, {
            clipPath: "inset(0% 100% 100% 0%)",
            xPercent: -40,
            opacity: 1.2,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
        }, "<").from(splitText2Ref.current.chars, {
            clipPath: "inset(0% 100% 100% 0%)",
            xPercent: 40,
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
        }, "<").fromTo(
            ".rotateIcon",
            { rotate: 0 },
            {
                rotate: 45,
                duration: 1.2,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
                transformOrigin: "50% 50%",
            }, "<");

    }, [isLoaded]);

    return (
        <section className="relative w-full px-6 flex flex-col gap-6 lg:gap-18">
            {/* Top Row */}
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
                {/* Text */}
                <h1 className="font-extrabold uppercase tracking-tighter text-center lg:text-left">
                    <span className="block text-5xl lg:text-[10vw] hero-text leading-[0.85]">
                        Security
                    </span>
                    <span className="block text-6xl lg:text-[13vw] hero-text leading-[0.85]">
                        Monster
                    </span>
                </h1>

                {/* Icon */}
                <RiAddLine className="w-50 h-50 lg:w-70 lg:h-70 rotateIcon" />
            </div>

            {/* Bottom Row */}
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
                {/* Icon */}
                <RiCloseLine className="w-50 h-50 lg:w-70 lg:h-70 rotateIcon" />

                {/* Text */}
                <h1 className="font-extrabold uppercase tracking-tighter text-center lg:text-right">
                    <span className="block text-6xl lg:text-[13vw] hero-text2 leading-[0.85]">
                        Wonder
                    </span>
                    <span className="block text-5xl lg:text-[10vw] hero-text2 leading-[0.85]">
                        Animation
                    </span>
                </h1>
            </div>
        </section>
    )
}

export default Hero;