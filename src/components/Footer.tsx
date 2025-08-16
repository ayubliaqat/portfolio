"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFooter(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          role="contentinfo"
          aria-label="Site Footer"
          className="w-full flex justify-center fixed bottom-6 left-0 right-0 z-50 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl text-center px-6 py-3 rounded-2xl bg-white shadow-lg border border-gray-200 text-gray-800 text-xs sm:text-sm md:text-base"
            animate={{ y: [0, -2, 0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            © {new Date().getFullYear()} <span className="font-semibold">Ayub Liaqat</span>.  
            Built with <span aria-hidden="true">☕</span> and <span aria-hidden="true">🧑‍💻</span>.
          </motion.div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
