"use client";

import { useState, useEffect, useRef } from "react";
import { Home, User, Code2, Briefcase, FolderKanban, Trophy, Mail, Menu, X } from "lucide-react";
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

  // 1. HIGH-PERFORMANCE SCROLL (Show/Hide)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Close menu if user scrolls
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
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

  // 2. INTERSECTION OBSERVER (The "Wow" Logic)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when section is in the middle of the screen
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
      {/* Container */}
      <div className="flex flex-col items-center">
        <ul className="flex items-center gap-2 shadow-2xl bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 ring-1 ring-black/5">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href} className="relative">
              <a
                href={href}
                className={clsx(
                  "relative flex items-center justify-center p-3 rounded-full transition-all duration-300",
                  active === href ? "bg-teal-600 text-white shadow-md" : "text-gray-500 hover:text-teal-600 hover:bg-teal-50"
                )}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                
                {/* Visual indicator for active (Desktop Only) */}
                {active === href && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-teal-400 opacity-20" />
                )}
              </a>
            </li>
          ))}
          
          {/* Mobile Menu Toggle Integrated into the same bar */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-3 text-gray-500 hover:text-teal-600"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </ul>

        {/* Mobile Dropdown - Clean & Animated */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 w-48 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 p-2 overflow-hidden animate-in fade-in zoom-in duration-300">
             {navItems.map(({ href, label }) => (
               <li key={href}>
                 <a 
                   href={href} 
                   onClick={() => setMenuOpen(false)}
                   className={clsx(
                     "block px-4 py-2 rounded-2xl text-sm transition-colors",
                     active === href ? "bg-teal-50 text-teal-700 font-bold" : "text-gray-600"
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