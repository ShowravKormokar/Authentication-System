import React from 'react'
import img01 from "../../assets/images/6846415.jpg"

const apis = () => {
    return (
        <main className='w-full h-full'>
            <section className='w-screen h-dvh text-center content-center'>
                <h1 className='text-[11vw]'>Hello, World!</h1>
            </section>
            <section className='spootlight w-screen border-2 border-amber-500'>
                <div className="row">
                    <img src={img01.src} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h2>Connect Your API's'</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos non sunt rem? Sit beatae optio mollitia eaque! Earum, similique delectus.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={img01.src} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="img">
                            <img src={img01.src} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Connect Your API's'</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos non sunt rem? Sit beatae optio mollitia eaque! Earum, similique delectus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src={img01.src} className="w-full h-full object-cover" alt="" />
                </div>

                <div className="svg-path">
                    <svg width="220" height="394" viewBox="0 0 220 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M156.268 15.2728C156.268 15.2728 28.9117 6.83196 15.6223 83.8546C2.333 160.877 204.996 93.3505 204.996 188.31C204.996 283.269 -35.3204 394.055 46.6309 257.947C128.582 121.838 121.938 393 121.938 393" stroke="black" stroke-width="30" />
                    </svg>

                </div>
            </section>
            <section className='w-screen h-dvh border-2 border-amber-500'>

            </section>
        </main>
    );
};

export default apis;