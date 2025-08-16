"use client";

import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Trophy,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      <div className="flex gap-8 shadow-xl px-8 py-3 rounded-full border border-gray-200">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="group relative text-gray-600 hover:text-teal-600 transition"
          >
            <Icon className="w-6 h-6" />
            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
