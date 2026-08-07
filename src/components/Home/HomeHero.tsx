"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  const name = "Ayub Liaqat";

  const skills = [
    "Modern Web Applications",
    "Next.js & TypeScript",
    "Scalable Backend Systems",
    "Headless CMS & APIs",
    "Pixel-Perfect UI/UX",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [skills.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.045, delayChildren: 0.15 },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUp = (delay: number): Variants => ({
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
    },
  });

  return (
    <section className="relative h-auto sm:min-h-[90vh] w-full flex items-center justify-center px-5 sm:px-8 pt-24 pb-12 sm:pt-0 sm:pb-0 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(460px,75vw)] h-[min(460px,75vw)] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(126,201,255,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Secondary drifting glow for depth */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[60%] w-[min(320px,55vw)] h-[min(320px,55vw)] rounded-full -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,160,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl w-full z-10 text-center flex flex-col items-center gap-5 sm:gap-8">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl px-4 py-1.5"
        >
          <Sparkles size={13} className="text-accent" />
          <span className="text-xs font-medium tracking-wide text-muted">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-wrap text-[clamp(2.6rem,10vw,5.5rem)] font-semibold tracking-tight leading-none text-foreground"
        >
          {name.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Skill ticker */}
        <motion.div
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        >
          <span className="text-[clamp(0.9rem,2.2vw,1.2rem)] text-muted font-normal">
            I specialize in
          </span>

          <div className="relative h-9 flex items-center justify-center overflow-hidden min-w-[190px] xs:min-w-[220px] sm:min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -18, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-1.5 absolute whitespace-nowrap"
              >
                <span
                  className="text-[clamp(0.9rem,2.2vw,1.2rem)] font-medium italic tracking-tight"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #7ec9ff, #c8a0ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {skills[index]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp(1.35)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full sm:w-auto pt-2"
        >
          {/* Primary — raised glass with shine sweep */}
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{
                rest: {
                  y: 0,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 10px 20px -6px rgba(126,201,255,0.35), 0 4px 8px -2px rgba(0,0,0,0.35)",
                },
                hover: {
                  y: -3,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 18px 30px -8px rgba(126,201,255,0.45), 0 8px 16px -4px rgba(0,0,0,0.4)",
                },
                tap: {
                  y: 1,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.25) inset, 0 4px 10px -4px rgba(126,201,255,0.3), 0 2px 4px -1px rgba(0,0,0,0.35)",
                },
              }}
              whileTap="tap"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full sm:w-auto overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 border border-white/[0.18] bg-gradient-to-b from-white/[0.14] to-white/[0.04] backdrop-blur-2xl text-foreground"
            >
              {/* shine sweep */}
              <motion.span
                variants={{
                  rest: { x: "-120%" },
                  hover: { x: "120%" },
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <span className="relative z-10 flex items-center gap-2">
                Hire me
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.button>
          </Link>

          {/* Secondary — raised glass, quieter elevation */}
          <Link href="/portfolio" className="w-full sm:w-auto">
            <motion.button
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="tap"
              variants={{
                rest: {
                  y: 0,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 6px 14px -6px rgba(0,0,0,0.4)",
                },
                hover: {
                  y: -3,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.18) inset, 0 14px 24px -8px rgba(0,0,0,0.45)",
                },
                tap: {
                  y: 1,
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 3px 8px -4px rgba(0,0,0,0.4)",
                },
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto rounded-xl px-8 py-3.5 text-sm font-medium flex items-center justify-center gap-2 border border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-white/[0.015] backdrop-blur-2xl text-foreground transition-colors duration-300 hover:border-white/[0.18]"
            >
              <Briefcase size={15} className="text-accent" />
              View portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}