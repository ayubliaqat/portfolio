"use client";

import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
      lenisInstance.on('scroll', ScrollTrigger.update);
    }

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      if (lenisInstance) {
        lenisInstance.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef}
      root 
      autoRaf={false}
      options={{ 
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}