"use client";
import { useGSAP } from '@gsap/react';
import { RiAddLine } from '@remixicon/react';
import gsap from 'gsap';
import React from 'react'

const TechStack = () => {


    useGSAP(() => {
        gsap.to("#techStack ", {
            transform: "translateX(-80%)",
            opacity: 2,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#techStackCon",
                start: "top top",
                end: "top -550%",
                scrub: 2,
                pin: true,
                // markers: true,
            }
        });
    });

    return (
        <section id='techStackCon' className='w-[300rem] h-dvh flex justify-start items-center p-24'>
            <div id='techStack' className='w-full h-dvh flex justify-start items-end'>
                <div className='w-full flex justify-center items-center gap-12'>
                    <h1 className='text-[10vw] font-extrabold'>01</h1>
                    <div className='w-[35rem]'>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates veritatis repudiandae velit voluptatem. Dolores ipsam maxime quidem fugiat facere?
                        </p>
                    </div>
                    <div>
                        <RiAddLine className='w-100 h-100' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-12'>
                    <h1 className='text-[10vw] font-extrabold'>02</h1>
                    <div className='w-[35rem]'>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates veritatis repudiandae velit voluptatem. Dolores ipsam maxime quidem fugiat facere?
                        </p>
                    </div>
                    <div>
                        <RiAddLine className='w-100 h-100' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-12'>
                    <h1 className='text-[10vw] font-extrabold'>03</h1>
                    <div className='w-[35rem]'>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates veritatis repudiandae velit voluptatem. Dolores ipsam maxime quidem fugiat facere?
                        </p>
                    </div>
                    <div>
                        <RiAddLine className='w-100 h-100' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-12'>
                    <h1 className='text-[10vw] font-extrabold'>04</h1>
                    <div className='w-[35rem]'>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates veritatis repudiandae velit voluptatem. Dolores ipsam maxime quidem fugiat facere?
                        </p>
                    </div>
                    <div>
                        <RiAddLine className='w-100 h-100' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TechStack;