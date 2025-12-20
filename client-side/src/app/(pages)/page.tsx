"use client";
import BounceText from '@/components/BounceText'
import Hero from '@/components/Hero'
import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
import { useEffect, useRef } from 'react';
import ReactLenis, { LenisRef } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const page = () => {
  const lenisRef = useRef<LenisRef | null>(null)
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 2000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, []);

  return (
    <main>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Hero />
      <BounceText text="was it worth the recreate ?" />
    </main>
  )
}

export default page