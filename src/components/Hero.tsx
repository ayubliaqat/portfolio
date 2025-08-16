"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
      aria-label="Hero Section - Ayub Liaqat Full Stack Developer"
    >
      <div className="max-w-5xl mx-auto px-4 w-full text-center">
        {/* Floating Card */}
        <motion.div
          className="neumorphic p-10 rounded-2xl bg-white shadow-2xl"
          animate={{ y: [0, -10, 0, 10, 0] }} // floating motion
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-6xl mb-6 text-[#1e3d59] drop-shadow-lg tracking-wide"
            style={{
              textShadow:
                "1px 1px 0 #1e3d59, -1px -1px 0 #1e3d59, 1px -1px 0 #1e3d59, -1px 1px 0 #1e3d59",
            }}
          >
            Ayub Liaqat
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Full Stack Web Developer • Next.js • React • Node.js • Supabase
          </p>

          {/* Contact Info */}
          <p className="text-[#1e3d59] mb-8">
            📧{" "}
            <a
              href="mailto:mayub7540@gmail.com"
              className="underline hover:text-orange-400"
            >
              mayub7540@gmail.com
            </a>{" "}
            • 📱 +92 304 5270495
          </p>

          {/* Social Icons + Resume */}
          <div className="flex items-center justify-center gap-6 mb-10 text-[#1e3d59]">
            <a
              href="https://github.com/ayubliaqat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-2xl transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayub-liaqat-716a9a11a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 text-2xl transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="/Ayub_Liaqat_Resume.pdf"
              target="_blank"
              className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="neumorphic px-6 py-3 rounded-xl font-semibold bg-white text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="neumorphic px-6 py-3 rounded-xl font-semibold bg-yellow-400 text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
