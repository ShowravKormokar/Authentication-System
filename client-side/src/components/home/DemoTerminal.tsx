import { RiAddBoxLine, RiAddLine, RiCloseLine, RiCodeBlock, RiTerminalBoxFill, RiTerminalBoxLine, RiTerminalWindowFill } from '@remixicon/react';

const DemoTerminal = () => {
    return (
        <section className='w-screen h-dvh flex gap-20 p-6 mt-10'>
            <div className="relative w-full h-full">
                <div className='absolute top-14 left-20'>
                    <div className=' relative w-80 h-55 z-49 backdrop-blur-lg border-2 rounded-sm pt-6 shadow shadow-accent-foreground cursor-move'>
                        <div className='absolute top-1 left-0 w-full flex justify-between items-center px-2'>
                            {/* <RiCodeBlock/> */}
                            <RiTerminalBoxLine className='w-3 h-3' />
                            <p className='flex justify-center items-center gap-2'>
                                <span className='text-[1vw]'>-</span>
                                <span className='text-[0.8vw]'>x</span>
                            </p>
                        </div>
                        <div className='w-full h-full border-t p-1'>
                            <p className='terminalBox text-[0.8vw]'>
                                c/: cd Authentication_System <br />
                                c/:Authentication_System/ npm run dev
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-60 left-90'>
                    <div className=' relative w-80 h-55 z-49 backdrop-blur-lg border-2 rounded-sm pt-6 shadow shadow-accent-foreground cursor-move'>
                        <div className='absolute top-1 left-0 w-full flex justify-between items-center px-2'>
                            {/* <RiCodeBlock/> */}
                            <RiTerminalBoxLine className='w-3 h-3' />
                            <p className='flex justify-center items-center gap-2'>
                                <span className='text-[1vw]'>-</span>
                                <span className='text-[0.8vw]'>x</span>
                            </p>
                        </div>
                        <div className='w-full h-full border-t p-1'>
                            <p className='terminalBox text-[0.8vw]'>
                                c/: cd Authentication_System <br />
                                c/:Authentication_System/ npm run dev
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-20 left-30'>
                    <div className=' relative w-80 h-55 z-49 backdrop-blur-lg border-2 rounded-sm pt-6 shadow shadow-accent-foreground cursor-move'>
                        <div className='absolute top-1 left-0 w-full flex justify-between items-center px-2'>
                            {/* <RiCodeBlock/> */}
                            <RiTerminalBoxLine className='w-3 h-3' />
                            <p className='flex justify-center items-center gap-2'>
                                <span className='text-[1vw]'>-</span>
                                <span className='text-[0.8vw]'>x</span>
                            </p>
                        </div>
                        <div className='w-full h-full border-t p-1'>
                            <p className='terminalBox text-[0.8vw]'>
                                c/: cd Authentication_System <br />
                                c/:Authentication_System/ npm run dev
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='flex justify-start items-center gap-5'>
                    <RiTerminalWindowFill className='w-10 h-10' />
                    <h1 className='text-[3vw] uppercase font-extrabold'>install and build</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus non veniam asperiores, nemo nostrum aliquid minus! Ipsum quam exercitationem a ea, commodi, atque doloremque dolor, nisi non delectus esse.</p>
                </div>
                <div>
                    <RiCloseLine className='w-[50vw] h-[50vw]'/>
                </div>
            </div>
        </section>
    );
};

export default DemoTerminal;