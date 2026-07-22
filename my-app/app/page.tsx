"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Hero from "../components/Hero";

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative">
      <Hero scrollYProgress={scrollYProgress} />
    </main>
  );
}