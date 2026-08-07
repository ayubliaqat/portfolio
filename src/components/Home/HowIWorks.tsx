"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: <Search className="text-[#38BDF8]" size={22} />,
    title: "Discover & Strategy",
    description:
      "Deep-dive into your objectives, technical constraints, target audience, and architecture requirements to blueprint a bulletproof roadmap.",
    badgeColor: "from-[#38BDF8]/20 to-transparent border-[#38BDF8]/30 text-[#38BDF8]",
    titleGradient: "from-[#38BDF8] via-white to-white",
  },
  {
    step: "02",
    icon: <Palette className="text-[#50FA7B]" size={22} />,
    title: "UX/UI Architecture",
    description:
      "Crafting high-contrast, glass-forward interfaces and seamless user flows optimized for maximum conversion and engagement.",
    badgeColor: "from-[#50FA7B]/20 to-transparent border-[#50FA7B]/30 text-[#50FA7B]",
    titleGradient: "from-[#50FA7B] via-white to-white",
  },
  {
    step: "03",
    icon: <Code2 className="text-[#BD93F9]" size={22} />,
    title: "Rigorous Development",
    description:
      "Writing clean, modular, and type-safe code using Next.js, TypeScript, and modern backend systems engineered for peak performance.",
    badgeColor: "from-[#BD93F9]/20 to-transparent border-[#BD93F9]/30 text-[#BD93F9]",
    titleGradient: "from-[#BD93F9] via-white to-white",
  },
  {
    step: "04",
    icon: <Rocket className="text-[#FF79C6]" size={22} />,
    title: "Ship & Scale",
    description:
      "Seamless deployment, comprehensive testing, and performance tuning to ensure your digital product launches flawlessly at scale.",
    badgeColor: "from-[#FF79C6]/20 to-transparent border-[#FF79C6]/30 text-[#FF79C6]",
    titleGradient: "from-[#FF79C6] via-white to-white",
  },
];

const headingWords = ["How", "I", "Work"];

export default function HowIWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-4 sm:py-8 lg:py-12">
      {/* Off-white top horizontal divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-12 sm:gap-16">
        {/* Header content */}
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-xs font-mono text-[#38BDF8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Process &amp; Methodology</span>
          </div>

          <h2 className="flex flex-wrap justify-center text-[clamp(2.5rem,5vw,4.2rem)] font-black tracking-tight leading-[1.05] text-foreground">
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
                className="mx-2"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted font-normal leading-relaxed">
            A repeatable, professional engineering workflow designed to eliminate friction,
            maintain transparency, and deliver high-impact digital products on schedule.
          </p>
        </div>

        {/* Process grid with smooth bottom-to-top reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/[0.25] hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-white/[0.2] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    {item.step}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className={`text-xl font-bold tracking-tight bg-gradient-to-r ${item.titleGradient} bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Off-white bottom horizontal divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
    </section>
  );
}