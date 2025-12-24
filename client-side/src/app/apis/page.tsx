import React from 'react'
import img01 from "../../assets/images/6846415.jpg"

const apis = () => {
    return (
        <main className='w-full h-full'>
            <section className='w-screen h-dvh text-center content-center'>
                <h1 className='text-[11vw]'>Hello, World!</h1>
            </section>
            <section className='w-screen border-2 border-amber-500'>
                <div className="row">
                    <img src={img01.src} alt="" />
                </div>
                <div className="row">
                    <img src={img01.src} alt="" />
                </div>
                <div className="row">
                    <img src={img01.src} alt="" />
                </div>
                <div className="row">
                    <img src={img01.src} alt="" />
                </div>
            </section>
            <section className='w-screen h-dvh border-2 border-amber-500'>

            </section>
        </main>
    );
};

export default apis;