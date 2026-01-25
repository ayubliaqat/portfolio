"use client";

import { useState, useEffect } from "react";
import { Home, User, Code2, Briefcase, FolderKanban, Mail, Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#skills", icon: Code2, label: "Skills" },
  { href: "#expertise", icon: Briefcase, label: "Expertise" },
  { href: "#projects", icon: FolderKanban, label: "Projects" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. SCROLL LOGIC (Show/Hide Navbar)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
        setMenuOpen(false); 
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 2. INTERSECTION OBSERVER (Active State Highlighting)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={clsx(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center">
        {/* Main Bar */}
        <ul className="flex items-center gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white/80 backdrop-blur-xl px-3 py-2 rounded-full border border-white/40">
          {navItems.map(({ href, icon: Icon }) => (
            <li key={href} className="relative">
              <a
                href={href}
                className={clsx(
                  "relative flex items-center justify-center p-3 rounded-full transition-all duration-300",
                  active === href ? "bg-[#1e3d59] text-white shadow-lg" : "text-slate-400 hover:text-[#1e3d59] hover:bg-slate-50"
                )}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                {active === href && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-20" />
                )}
              </a>
            </li>
          ))}
          
          <div className="w-[1px] h-6 bg-slate-200 mx-1 hidden sm:block" />

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-3 text-slate-500 hover:text-[#1e3d59]"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </ul>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 w-48 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-2 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
             {navItems.map(({ href, label }) => (
               <li key={href}>
                 <a 
                   href={href} 
                   onClick={() => setMenuOpen(false)}
                   className={clsx(
                     "block px-5 py-3 rounded-2xl text-sm transition-colors font-bold",
                     active === href ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50"
                   )}
                 >
                   {label}
                 </a>
               </li>
             ))}
          </ul>
        )}
      </div>
    </nav>
  );
}