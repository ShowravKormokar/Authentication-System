'use client';

import { useEffect, useRef } from 'react';

export default function NoiseBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const PIXEL_SIZE = 2; // try 1, 2, or 3

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // ✅ TS-safe

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // ✅ TS-safe

        const dpr = window.devicePixelRatio || 1;
        let animationId: number;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        resize();
        window.addEventListener('resize', resize);

        const drawNoise = () => {
            const { width, height } = canvas;
            const imageData = ctx.createImageData(width, height);
            const buffer32 = new Uint32Array(imageData.data.buffer);

            for (let i = 0; i < buffer32.length; i++) {
                if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
            }

            ctx.putImageData(imageData, 0, 0);
            animationId = requestAnimationFrame(drawNoise);
        };

        drawNoise();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);
    /*
    Subtle: opacity-[0.03]
    Medium: opacity-[0.08]
    Strong: opacity-[0.12]
    */
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]"
        />
    );
}