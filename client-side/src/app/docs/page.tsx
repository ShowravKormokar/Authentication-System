"use client";
import { useGSAP } from "@gsap/react";
import dh from "../../assets/images/dashboard.png"
import { Fragment_Mono } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const docs = () => {

    useGSAP(() => {
        const dHeader = document.querySelector(".docs-header");
        const dHeroImg = document.querySelector(".docs-hero-img");
        const dCanvas = document.querySelector("canvas");
        const dContext = dCanvas?.getContext("2d");
        if (!dCanvas || !dContext) return;

        const setCanvasSize = () => {
            const pixelRatio = window.devicePixelRatio || 1;
            dCanvas.width = window.innerWidth * pixelRatio;
            dCanvas.height = window.innerHeight * pixelRatio;
            dCanvas.style.width = window.innerWidth + "px";
            dCanvas.style.height = window.innerHeight + "px";

            dContext.scale(pixelRatio, pixelRatio);
        };
        setCanvasSize();

        const dFrameCount = 40;
        const currentFrame = (index: any) => `../../assets/frames/frame_${(index + 1).toString().padStart(3, "0")}.png`;

        let vImgaes = [];
        let videoFrames = { frame: 0 };
        let imgToLoad = dFrameCount;

        const onLoad = () => {
            imgToLoad--;

            if (!imgToLoad) {
                render();
                setupScrollTrigger();
            }
        };

        for (let i = 0; i < dFrameCount; i++) {
            const fImg = new Image();
            fImg.onload = onLoad;
            fImg.onerror = function () {
                onLoad.call(this);
            };
            fImg.src = currentFrame(i);
            vImgaes.push(fImg);
        };

        const render = () => {
            const dCanvasWidth = window.innerWidth;
            const dCanvasHeight = window.innerHeight;

            dContext.clearRect(0, 0, dCanvasWidth, dCanvasHeight);

            const imgF2 = vImgaes[videoFrames.frame];
            if (imgF2 && imgF2.complete && imgF2.naturalWidth > 0) {
                const imageAspect = imgF2.naturalWidth / imgF2.naturalHeight;
                const canvasAspect = dCanvasWidth / dCanvasHeight;

                let drawWidth, drawHeight, drawX, drawY;

                if (imageAspect > canvasAspect) {
                    drawHeight = dCanvasHeight;
                    drawWidth = drawHeight * imageAspect;
                    drawX = (dCanvasWidth - drawWidth) / 2
                    drawY = 0;
                } else {
                    drawWidth = dCanvasWidth;
                    drawHeight = drawWidth / imageAspect;
                    drawX = 0;
                    drawY = (dCanvasHeight - drawHeight) / 2;
                }
                dContext.drawImage(imgF2, drawX, drawY, drawWidth, drawHeight);
            };
        };

        const setupScrollTrigger = () => {
            ScrollTrigger.create({
                trigger: ".docs-hero",
                start: "top top",
                end: `+=${window.innerHeight * 7}px`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                markers: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const animationProgress = Math.min(progress / 0.9, 1);
                    const targetFrame = Math.round(animationProgress * (dFrameCount - 1));

                    videoFrames.frame = targetFrame;
                    render();

                    if (progress <= 0.1) {
                        const navProgress = progress / 0.1;
                        const opacity = 1 - navProgress;
                        // gsap.set(nav,{opacity:0});
                    } else {
                        // gsap.set(nav,{opacity:0});
                    }

                    if (progress <= 0.25) {
                        const zProgress = progress / 0.25;
                        const translateZ = zProgress * - 500;
                        let opacity = 1;
                        if (progress >= 0.2) {
                            const fadeProgress = Math.min((progress - 0.2) / (0.25 - 0.2), 1);
                            opacity = 1 - fadeProgress;
                        }

                        gsap.set(dHeader, {
                            transform: `translate(-50%,-50%) translateZ(${translateZ}px)`,
                            opacity,
                        });
                    } else {
                        gsap.set(dHeader, { opacity: 0 });
                    }

                    if (progress < 0.6) {
                        gsap.set(dHeroImg, {
                            transform: "trnaslateZ(1000px)",
                            opacity: 0,
                        });
                    } else if (progress >= 0.6 && progress <= 0.9) {
                        const imgProgress = (progress - 0.6) / 0.3;
                        const translateZ = 1000 - imgProgress * 1000;

                        let opacity = 0;
                        if (progress <= 0.8) {
                            const opacityProgress = (progress - 0.6) / 0.2;
                            opacity = opacityProgress;
                        } else {
                            opacity = 1;
                        }
                        gsap.set(dHeroImg, {
                            transform: `translateZ(${translateZ}px)`,
                            opacity,
                        });
                    } else {
                        gsap.set(dHeroImg, {
                            transform: "translateZ(0px)",
                            opacity: 1,
                        });
                    }
                }
            });
        }

        window.addEventListener("resize", () => {
            setCanvasSize();
            render();
            ScrollTrigger.refresh();
        })

    }, []);

    return (
        <main id='docs' className='docs w-full h-full'>
            <section className="docs-hero">
                <canvas></canvas>
                <div className="docs-hero-content">
                    <div className="docs-header">
                        <h1 className='text-[4vw] font-bold leading-7'>One unified workspace to build, test, and ship AI faster</h1>
                        <p className='uppercase text-sm font-medium'>Tursted by</p>
                    </div>
                </div>
                <div className="docs-hero-img">
                    <div className="dh-img">
                        <img src={dh.src} alt="hero-dashboard" />
                    </div>
                </div>
            </section>

            <section className="w-full h-dvh"></section>
        </main>
    )
}

export default docs;