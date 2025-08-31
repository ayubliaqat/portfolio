"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import Script from "next/script";
import Link from "next/link";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* JSON-LD Person Schema for SEO */}
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ayub Liaqat",
            jobTitle: "Full-stack Website Developer | Next.js Expert",
            url: "https://your-portfolio.com",
            sameAs: [
              "https://github.com/ayubliaqat",
              "https://www.linkedin.com/in/ayub-liaqat-716a9a11a/",
            ],
            email: "mailto:mayub7540@gmail.com",
            telephone: "+92-304-5270495",
            image: "https://your-portfolio.com/your-photo.jpg",
            description:
              "Ayub Liaqat is a passionate full-stack website developer specializing in Next.js, React, and SEO-friendly modern web design.",
          }),
        }}
      />

      <section
        id="home"
        className="min-h-screen flex items-center pt-20 sm:pt-28 scroll-mt-28"
        aria-label="Hero Section - Ayub Liaqat Full Stack Developer"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Floating Card */}
          <motion.div
            className="neumorphic p-6 sm:p-8 md:p-10 rounded-2xl bg-white shadow-2xl"
            animate={reduceMotion ? undefined : { y: [0, -10, 0, 10, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* Greeting + Heading (Stepped Zig-Zag Flow) */}
            <div className="flex flex-col items-start mb-6">
              {/* Hi */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg text-bold text-orange-400 sm:text-xl md:text-2xl text-gray-700 mb-2 pl-[180px]"
              >
                Hi,
              </motion.p>

              {/* I'm (escaped apostrophe here) */}
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl text-bold text-orange-400 sm:text-xl md:text-2xl text-gray-700 mb-4 pl-[220px]"
              >
                I&apos;m
              </motion.p>

              {/* Main Name */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1e3d59] tracking-wide leading-tight drop-shadow self-center"
                style={{
                  textShadow:
                    "0.5px 0.5px 0 #1e3d59, -0.5px -0.5px 0 #1e3d59",
                }}
              >
                Ayub Liaqat
              </motion.h1>
            </div>

            {/* Subheading */}
            <h2 className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
              Full-stack Website Developer | Next.js Expert
            </h2>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-3 mb-8 sm:gap-4 text-[#1e3d59] text-sm sm:text-base">
              <a
                href="tel:+923045270495"
                className="flex items-center gap-2 underline hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                aria-label="Call Ayub Liaqat at +92 304 5270495"
              >
                <FiPhone className="text-orange-400 w-5 h-5" />
                +92 304 5270495
              </a>
              <a
                href="mailto:mayub7540@gmail.com"
                className="flex items-center gap-2 underline hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                aria-label="Email Ayub Liaqat at mayub7540@gmail.com"
              >
                <FiMail className="text-orange-400 w-5 h-5" />
                mayub7540@gmail.com
              </a>
            </div>

            {/* Social + Resume */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-[#1e3d59]">
              <a
                href="https://github.com/ayubliaqat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 text-2xl transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ayub-liaqat-716a9a11a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
              <Link
                href="/Ayub_Liaqat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="neumorphic px-6 py-3 rounded-xl font-semibold bg-white text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="neumorphic px-6 py-3 rounded-xl font-semibold bg-yellow-400 text-[#1e3d59] shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
