"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Layers, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Terminal, 
  Boxes 
} from "lucide-react";

const techCategories = [
  {
    category: "Frontend & UI",
    description: "Immersive, high-performance interfaces built for speed and fluid interactions.",
    icon: <Code className="text-[#38BDF8]" size={22} />,
    borderColor: "group-hover:border-[#38BDF8]/40",
    badgeColor: "from-[#38BDF8]/20 to-transparent border-[#38BDF8]/30 text-[#38BDF8]",
    titleGradient: "from-[#38BDF8] via-white to-white",
    technologies: [
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "GSAP", level: "Advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Robust server-side logic, secure REST pipelines, and scalable microservices.",
    icon: <Server className="text-[#50FA7B]" size={22} />,
    borderColor: "group-hover:border-[#50FA7B]/40",
    badgeColor: "from-[#50FA7B]/20 to-transparent border-[#50FA7B]/30 text-[#50FA7B]",
    titleGradient: "from-[#50FA7B] via-white to-white",
    technologies: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "Server Actions", level: "Advanced" },
      { name: "WebSockets", level: "Intermediate" },
    ],
  },
  {
    category: "Databases & Cloud",
    description: "Optimized data persistence layers and reliable cloud infrastructure.",
    icon: <Database className="text-[#BD93F9]" size={22} />,
    borderColor: "group-hover:border-[#BD93F9]/40",
    badgeColor: "from-[#BD93F9]/20 to-transparent border-[#BD93F9]/30 text-[#BD93F9]",
    titleGradient: "from-[#BD93F9] via-white to-white",
    technologies: [
      { name: "MongoDB", level: "Advanced" },
      { name: "Supabase", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "Prisma ORM", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Ecosystem",
    description: "Modern developer tooling, deployment platforms, and architectural standards.",
    icon: <Boxes className="text-[#FF79C6]" size={22} />,
    borderColor: "group-hover:border-[#FF79C6]/40",
    badgeColor: "from-[#FF79C6]/20 to-transparent border-[#FF79C6]/30 text-[#FF79C6]",
    titleGradient: "from-[#FF79C6] via-white to-white",
    technologies: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "Postman", level: "Advanced" },
      { name: "SEO & Performance", level: "Expert" },
      { name: "VS Code", level: "Expert" },
    ],
  },
];

const headingWords = ["Tech", "Stack"];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-4 sm:py-6 lg:py-16">
      {/* Off-white top horizontal divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-12 sm:gap-16">
        {/* Header content */}
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-xs font-mono text-[#38BDF8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Technologies &amp; Tools</span>
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
            The powerful, modern, and production-tested technology stack I use to engineer 
            high-performance digital products and scalable web systems.
          </p>
        </div>

        {/* Tech grid with smooth bottom-to-top reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {techCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${group.borderColor} hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-white/[0.2] transition-all duration-300">
                    {group.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border bg-gradient-to-r ${group.badgeColor}`}
                  >
                    {group.category}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className={`text-xl font-bold tracking-tight bg-gradient-to-r ${group.titleGradient} bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]`}>
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-normal">
                    {group.description}
                  </p>
                </div>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="text-xs font-medium text-foreground tracking-wide">
                        {tech.name}
                      </span>
                    </div>
                  ))}
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