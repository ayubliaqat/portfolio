"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show footer when user scrolls down at least 200px
      if (window.scrollY > 200) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showFooter && (
        <motion.footer
          className="w-full flex justify-center fixed bottom-6 left-0 right-0 z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="px-6 py-4 rounded-2xl bg-white shadow-lg border border-gray-200 text-[#1e3d59] text-sm"
            animate={{ y: [0, -3, 0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            © 2025 Ayub Liaqat. Built with ☕ and 🧑‍💻.
          </motion.div>
        </motion.footer>
      )}
    </>
  );
}
