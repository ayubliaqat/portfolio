"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

      <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-10 sm:p-16 rounded-3xl border border-[#38BDF8]/30 bg-gradient-to-br from-[#38BDF8]/10 via-white/[0.03] to-[#FF79C6]/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden text-center flex flex-col items-center gap-8 group"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/15 via-transparent to-[#FF79C6]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
            <Sparkles size={28} />
          </div>

          <div className="flex flex-col gap-4 max-w-2xl relative z-10">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black tracking-tight leading-[1.1] text-foreground">
              Ready to Turn Your Vision Into{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FF79C6] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Digital Reality?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
              Let&apos;s engineer high-performance web applications, scalable architectures, and immersive interfaces together.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0B132B] font-bold text-base shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:opacity-95 hover:scale-105 transition-all duration-300"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={20} />
            </a>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FF79C6]" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
    </section>
  );
}