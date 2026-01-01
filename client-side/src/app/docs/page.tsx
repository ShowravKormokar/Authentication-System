import React from 'react'
import dh from "../../assets/images/dashboard.png"

const docs = () => {
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