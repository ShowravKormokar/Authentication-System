import React from 'react'
import dh from "../../assets/images/dashboard.png"

const docs = () => {
    return (
        <main>
            <section className="docs-hero">
                <canvas></canvas>
                <div className="docs-hero-content">
                    <div className="docs-header">
                        <h1>One unified workspace to build, test, and ship AI faster</h1>
                        <p>Tursted by</p>
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

export default docs