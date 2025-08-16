"use client";

import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Trophy,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#skills", icon: Code2, label: "Skills" },
  { href: "#expertise", icon: Briefcase, label: "Expertise" },
  { href: "#projects", icon: FolderKanban, label: "Projects" },
  { href: "#achievements", icon: Trophy, label: "Achievements" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Track active section
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPos = window.scrollY + 100;
      for (const { href } of navItems) {
        const section = document.querySelector(href);
        if (
          section &&
          section instanceof HTMLElement &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(href);
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={clsx(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-28"
      )}
    >
      {/* Desktop Navbar */}
      <div className="hidden sm:flex gap-6 sm:gap-8 shadow-lg bg-white/80 backdrop-blur-md px-6 sm:px-8 py-3 rounded-full border border-gray-200">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className={clsx(
              "group relative text-gray-600 hover:text-teal-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-full p-1",
              active === href && "text-teal-600"
            )}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg border border-gray-200">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-4 flex flex-col items-start gap-4 animate-fadeIn">
          {navItems.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "flex items-center gap-3 text-gray-700 hover:text-teal-600 transition w-full",
                active === href && "text-teal-600 font-medium"
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
