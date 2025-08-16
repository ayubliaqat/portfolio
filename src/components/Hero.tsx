"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 sm:pt-28 scroll-mt-28"
      aria-label="Hero Section - Ayub Liaqat Full Stack Developer"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Floating Card */}
        <motion.div
          className="neumorphic p-8 sm:p-10 rounded-2xl bg-white shadow-2xl"
          animate={reduceMotion ? undefined : { y: [0, -10, 0, 10, 0] }}
          transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl mb-4 md:mb-6 text-[#1e3d59] drop-shadow-lg tracking-wide leading-tight"
            style={{
              textShadow:
                "1px 1px 0 #1e3d59, -1px -1px 0 #1e3d59, 1px -1px 0 #1e3d59, -1px 1px 0 #1e3d59",
            }}
          >
            Ayub Liaqat
          </h1>

          {/* Subheading (semantic h2 for SEO) */}
          <h2 className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
            Building smart, stunning full-stack websites.
          </h2>

          {/* Contact Info */}
          <p className="text-[#1e3d59] mb-8 text-sm sm:text-base">
            📧{" "}
            <a
              href="mailto:mayub7540@gmail.com"
              className="underline hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
            >
              mayub7540@gmail.com
            </a>{" "}
            • 📱{" "}
            <a
              href="tel:+923045270495"
              className="underline hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
            >
              +92 304 5270495
            </a>
          </p>

          {/* Social Icons + Resume */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-[#1e3d59]">
            <a
              href="https://github.com/ayubliaqat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/ayub-liaqat-716a9a11a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-2xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>

            <a
              href="/Ayub_Liaqat_Resume.pdf"
              target="_blank"
              className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Download Resume
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="neumorphic px-6 py-3 rounded-xl font-semibold bg-white text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3d59]"
              aria-label="Jump to Projects"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="neumorphic px-6 py-3 rounded-xl font-semibold bg-yellow-400 text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              aria-label="Jump to Contact"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
