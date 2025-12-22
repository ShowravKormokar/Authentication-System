import { RiAddLine, RiCloseLine } from '@remixicon/react';
import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col items-center justify-between w-full h-dvh px-6'>
            <div className='text-start w-full h-full'>
                <h1 className='text-3xl leading-28 font-extrabold uppercase tracking-tight lg:text-[10vw] flex justify-between items-center'>
                    <span className='lg:text-[13vw]'>
                        Wonder <br /> <span className='lg:text-[10vw]'>Animation</span>
                    </span>
                    <span>
                        <RiAddLine className=' w-70 h-70' />
                    </span>
                </h1>
            </div>
            <div className='text-end w-full h-full'>
                <h1 className='text-3xl leading-28 font-extrabold uppercase tracking-tight lg:text-[10vw] flex justify-between items-center'>
                    <span>
                        <RiCloseLine className=' w-70 h-70' />
                    </span>
                    <span className='lg:text-[13vw]'>
                        Wonder <br /> <span className='lg:text-[10vw]'>Animation</span>
                    </span>
                </h1>
            </div>
        </section>
    )
}

export default Hero;