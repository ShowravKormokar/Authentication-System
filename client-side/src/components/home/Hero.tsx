"use client";
import { useGSAP } from '@gsap/react';
import { RiAddLine, RiCloseLine } from '@remixicon/react';
import gsap from 'gsap/all';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Hero = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const textSplit2 = new SplitText(".hero-text2", { type: "chars" });
            const textSplit = new SplitText(".hero-text", { type: "chars" });

            const tl = gsap.timeline();

            tl.from(textSplit.chars, {
                clipPath: "inset(0% 100% 100% 0%)",
                xPercent: -40,
                opacity: 1.2,
                duration: 1,
                stagger: 0.05,
                ease: "power3.out",
            }, "<").from(textSplit2.chars, {
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
        });
    }, []);

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