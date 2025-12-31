"use client";

import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import img01 from "../../assets/images/6846415.png"
import img02 from "../../assets/images/6850064.png"
import img03 from "../../assets/images/6861232.png"
import img04 from "../../assets/images/6862825.png"

gsap.registerPlugin(ScrollTrigger);

const Apis = () => {

    useGSAP(() => {
        const path = document.getElementById("stroke-path") as SVGPathElement | null;
        if (!path) return;

        const length = path.getTotalLength();

        // initial state
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".spootlight",
                start: "top 10%",
                end: "bottom 180%",
                scrub: true,
            },
        });
    }, []);

    return (
        <main className='w-full h-full'>
            <section className='w-screen h-dvh text-center content-center'>
                <h1 className='text-[11vw]'>Hello, World!</h1>
            </section>
            <section className='spootlight'>
                <div className="row">
                    <img src={img01.src} className="object-cover" alt="" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h2 className='text-[3vw] font-bold'>Connect Your API's'</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos non sunt rem? Sit beatae optio mollitia eaque! Earum, similique delectus.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={img02.src} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="img">
                            <img src={img03.src} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className='text-[3vw] font-bold'>Connect Your API's'</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos non sunt rem? Sit beatae optio mollitia eaque! Earum, similique delectus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src={img04.src} className="object-cover" alt="" />
                </div>

                <div className="svg-path">
                    <svg
                        width="220"
                        height="394"
                        viewBox="0 0 220 394"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path id="stroke-path" d="M156.268 15.2728C156.268 15.2728 28.9117 6.83196 15.6223 83.8546C2.333 160.877 204.996 93.3505 204.996 188.31C204.996 283.269 -35.3204 394.055 46.6309 257.947C128.582 121.838 121.938 393 121.938 393" stroke="orange" strokeWidth="45" strokeLinecap='round' />
                    </svg>
                </div>
            </section>
            {/* <section className='w-screen h-dvh border-2 border-amber-500'>

            </section> */}
        </main>
    );
};

export default Apis;