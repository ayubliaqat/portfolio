"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, MessageSquare, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "/about", icon: <User size={20} /> },
    { name: "Works", href: "/portfolio", icon: <Briefcase size={20} /> },
    { name: "Contact", href: "/contact", icon: <MessageSquare size={20} /> },
  ];

  return (
    <header className="fixed top-2 md:top-4 left-0 w-full z-[100] px-2 md:px-6">
      {/* THE PARENT CARD */}
      <div className="max-w-7xl mx-auto glass p-1.5 md:p-2 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-[#27374D]/20 backdrop-blur-md">
        
        <div className="flex items-center justify-between">
          
          {/* LEFT: Location (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 text-muted font-bold text-[10px] tracking-widest uppercase bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
            <MapPin size={12} className="text-foreground" />
            <span className="opacity-80">Lahore, PK</span>
          </div>

          {/* CENTER: The Icon Nav (Responsive) */}
          <motion.nav 
            layout
            className="flex items-center gap-1 p-1 rounded-full mx-auto lg:mx-0 bg-white/5 border border-white/5"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.name;

              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(221, 230, 237, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative flex items-center justify-center p-3 md:p-3.5 rounded-full transition-all ${
                      isActive ? "text-foreground bg-white/10" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.icon}

                    {/* SURGICAL TOOLTIP: Appears ABOVE the icon on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: -45, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute hidden md:block bg-accent text-background px-3 py-1 rounded-md font-mono text-[9px] font-black uppercase tracking-widest shadow-2xl pointer-events-none whitespace-nowrap"
                        >
                          {link.name}
                          {/* Indicator Arrow */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rotate-45" />
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute -bottom-1 w-1 h-1 bg-foreground rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </motion.nav>

          {/* RIGHT: Time (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 text-muted font-mono text-[11px] font-bold bg-white/5 px-5 py-2.5 rounded-full border border-white/5">
            <Clock size={12} className="text-foreground" />
            <span className="tabular-nums opacity-80">{time}</span>
          </div>

        </div>
      </div>
    </header>
  );
}