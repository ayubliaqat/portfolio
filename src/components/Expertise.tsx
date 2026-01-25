"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: "Full-Stack Native Logic",
      desc: "Architecting end-to-end systems using Next.js 16 and Server Actions. I specialize in writing custom backend logic and middleware to avoid reliance on third-party APIs.",
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: "Schema-First Engineering",
      desc: "Designing optimized MongoDB & Mongoose schemas. Implementing complex data relationships and custom Zod validation for 100% data integrity.",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: "Custom SEO Engines",
      desc: "Building programmatic SEO solutions. Expert in custom slugification logic and dynamic metadata generation to ensure maximum search engine visibility.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-400" />,
      title: "Security & Validation",
      desc: "Implementing secure authentication and data sanitization. I ensure all server-side logic is protected against common vulnerabilities through strict validation.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: "Performance Optimization",
      desc: "Optimizing Core Web Vitals using ISR, SSG, and advanced caching strategies. Focused on lightning-fast load times and native performance.",
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: "Clean Code Architecture",
      desc: "Writing modular, maintainable, and strictly typed TypeScript code. My goal is always native execution and scalable component structures.",
    },
  ];

  return (
    <section
      id="expertise"
      className="min-h-screen flex flex-col items-center py-24 bg-white scroll-mt-28"
      aria-label="Expertise Section - Ayub Liaqat"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Title */}
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💼</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3d59]">Expertise</h2>
          </div>
          <div className="h-1.5 w-24 bg-orange-400 rounded-full" />
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              // "UBRA HUA" (Elevated) Look
              className="bg-white rounded-[2rem] p-8 shadow-[15px_15px_40px_#e6e6e6,-15px_-15px_40px_#ffffff] border border-gray-50 flex flex-col items-start gap-4 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "25px_25px_50px_#d1d1d1,-25px_-25px_50px_#ffffff" 
              }}
            >
              <div className="p-3 bg-gray-50 rounded-2xl shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3d59]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}