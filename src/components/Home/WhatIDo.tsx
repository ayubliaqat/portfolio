"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingBag,
  FileText,
  Users,
  Cpu,
  Globe2,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const websiteTypes = [
  {
    icon: <ShoppingBag className="text-[#38BDF8]" size={22} />,
    title: "E-Commerce",
    description:
      "Blazing-fast digital storefronts with immersive product flows, secure checkouts, and optimized conversion pathways.",
    tag: "Storefronts",
    badgeColor: "from-[#38BDF8]/20 to-transparent border-[#38BDF8]/30 text-[#38BDF8]",
  },
  {
    icon: <FileText className="text-[#50FA7B]" size={22} />,
    title: "Blogging",
    description:
      "Lightning-fast publication platforms with clean typography, structured SEO layouts, and seamless content management.",
    tag: "Publishing",
    badgeColor: "from-[#50FA7B]/20 to-transparent border-[#50FA7B]/30 text-[#50FA7B]",
  },
  {
    icon: <Users className="text-[#BD93F9]" size={22} />,
    title: "CRM",
    description:
      "Custom internal tools and workflow dashboards built to track leads, manage data, and streamline business operations.",
    tag: "Operations",
    badgeColor: "from-[#BD93F9]/20 to-transparent border-[#BD93F9]/30 text-[#BD93F9]",
  },
  {
    icon: <Cpu className="text-[#FF79C6]" size={22} />,
    title: "AI",
    description:
      "Advanced cloud software and AI-powered interfaces engineered for high-concurrency performance and automated workflows.",
    tag: "Cloud AI",
    badgeColor: "from-[#FF79C6]/20 to-transparent border-[#FF79C6]/30 text-[#FF79C6]",
  },
  {
    icon: <Globe2 className="text-[#FFB86C]" size={22} />,
    title: "SaaS",
    description:
      "Robust, scalable web applications engineered with Next.js and modern backend architectures for high-concurrency performance.",
    tag: "High-Scale",
    badgeColor: "from-[#FFB86C]/20 to-transparent border-[#FFB86C]/30 text-[#FFB86C]",
  },
  {
    icon: <Briefcase className="text-[#8BE9FD]" size={22} />,
    title: "Portfolios",
    description:
      "High-converting promotional pages and sleek personal portfolios designed to capture attention and showcase work.",
    tag: "Showcase",
    badgeColor: "from-[#8BE9FD]/20 to-transparent border-[#8BE9FD]/30 text-[#8BE9FD]",
  },
];

const headingWords = ["What", "I", "Do"];

export default function WhatIDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cardsEl = cardsColumnRef.current;
      const sectionEl = sectionRef.current;
      const pinEl = pinRef.current;
      if (!cardsEl || !sectionEl || !pinEl) return;

      const distance = cardsEl.scrollHeight - pinEl.clientHeight + 140;

      const tween = gsap.to(cardsEl, {
        y: -distance,
        ease: "none",
      });

      const st = ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: () => `+=${distance + 150}`,
        pin: pinEl,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        animation: tween,
      });

      ScrollTrigger.refresh();

      return () => {
        st.kill();
        tween.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === sectionEl) {
            trigger.kill(true);
          }
        });
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-transparent">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

      <div
        ref={pinRef}
        className="w-full flex items-center bg-transparent lg:min-h-screen overflow-hidden"
      >
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-xs font-mono text-[#38BDF8] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Core Capabilities &amp; Architecture</span>
              </div>

              <h2 className="flex flex-wrap text-[clamp(2.6rem,5vw,4.2rem)] font-black tracking-tight leading-[1.05] text-foreground">
                {headingWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FF79C6] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-[length:200%_auto] animate-[gradientShift_6s_ease_infinite]"
                >
                  &amp; What I Build
                </motion.span>
              </h2>

              <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-md">
                Elite digital engineering across diverse industries — rigorous
                backend logic paired with clean, glass-forward interfaces.
                Explore the range on the right.
              </p>

              <div className="hidden lg:flex items-center gap-3 pt-4 text-xs font-mono text-muted">
                <span className="w-8 h-[1px] bg-white/20" />
                <span>SCROLL TO EXPLORE ARCHITECTURE</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 relative lg:h-[75vh] overflow-hidden">
              <div
                ref={cardsColumnRef}
                className="flex flex-col gap-6 lg:pt-[10vh] lg:pb-[35vh]"
              >
                {websiteTypes.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className={`group relative p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/[0.2] hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden w-full lg:w-[92%] ${
                        isEven ? "lg:self-start" : "lg:self-end"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex flex-col gap-5 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border bg-gradient-to-r ${item.badgeColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center justify-between">
                            {item.title}
                            <ArrowUpRight
                              size={18}
                              className="text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            />
                          </h3>
                          <p className="text-sm text-muted leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}