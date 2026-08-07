"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  // Fix for Hydration Mismatch
  const [year, setYear] = useState<number>(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { name: "Twitter", href: "https://twitter.com/yourprofile" },
    { name: "GitHub", href: "https://github.com/yourprofile" },
    { name: "Instagram", href: "https://instagram.com/yourprofile" },
  ];

  return (
    <footer className="w-full px-4 pb-12 pt-20 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass w-full max-w-7xl p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] border-t border-border shadow-hanging-shadow flex flex-col items-center relative overflow-hidden"
      >
        
        {/* 1. TOP: NAV CARD (Responsive Wrap) */}
        <nav className="glass bg-white/[0.03] p-1 rounded-3xl md:rounded-full border border-border mb-8 mt-4 md:mb-10">
          <div className="flex flex-wrap justify-center items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-mono font-black tracking-[0.2em] text-muted/60 hover:text-accent hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* 2. MIDDLE: SOCIAL LINKS (Grid for Mobile) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${social.name}`}
              whileHover={{ y: -2, backgroundColor: "rgba(var(--accent), 0.08)" }}
              className="px-3 md:px-4 py-2 rounded-xl border border-border bg-white/[0.01] text-[8px] md:text-[9px] font-mono font-bold tracking-widest text-muted transition-all"
            >
              {social.name}
            </motion.a>
          ))}
        </div>

        {/* 3. BOTTOM: THE SEAL (Embossed Brand Card) */}
        <div className="w-full pt-6 border-t border-border flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-background/40 px-6 md:px-10 py-3 rounded-2xl md:rounded-3xl border-t border-border shadow-inner flex flex-col items-center gap-1.5"
          >
            <p className="text-[11px] md:text-[13px] font-sans font-black tracking-[0.4em] text-accent">
              Ayub Liaqat
            </p>
            <p className="text-[8px] md:text-[9px] font-mono font-medium tracking-[0.15em] text-muted/40 text-center">
              © {year} • Sr. MERN Stack Developer
            </p>
          </motion.div>
        </div>

        {/* Decorative ambient light */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
      </motion.div>
    </footer>
  );
}