"use client";

import { motion, useReducedMotion, Variants } from "framer-motion"; // Added Variants here
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import Script from "next/script";
import Link from "next/link";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // 1. Explicitly type the variants to solve the TS error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" // Use standard easing strings
      } 
    }
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ayub Liaqat",
            jobTitle: "Next.js & MERN Stack Developer",
            url: "https://ayubliaqat.vercel.app",
            sameAs: [
              "https://github.com/ayubliaqat",
              "https://www.linkedin.com/in/ayub-liaqat-716a9a11a/",
            ],
          }),
        }}
      />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-white"
        aria-label="Hero Section"
      >
        <div className="max-w-5xl mx-auto px-6 w-full text-center">
          <motion.div
            className="p-10 sm:p-16 rounded-[3rem] bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50"
            // Simple animation for the card itself doesn't need external variants
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <div className="w-full flex flex-col items-start mb-6">
                <motion.p variants={itemVariants} className="text-lg font-bold text-orange-400 sm:text-xl md:pl-40 lg:pl-56">
                  Hi,
                </motion.p>
                <motion.p variants={itemVariants} className="text-xl font-bold text-orange-400 sm:text-2xl md:pl-48 lg:pl-64">
                  I&apos;m
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-black text-[#1e3d59] tracking-tight self-center">
                  Ayub Liaqat
                </motion.h1>
              </div>

              <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-gray-700 mb-8">
                Full Stack Developer | Next.Js 
              </motion.h2>

              <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-10 text-[#1e3d59] font-medium">
                <a href="tel:+923045270495" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <FiPhone className="text-orange-400 group-hover:scale-110 transition-transform" />
                  +92 3298638131
                </a>
                <a href="mailto:mayub7540@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                  <FiMail className="text-orange-400 group-hover:scale-110 transition-transform" />
                  mayub7540@gmail.com
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-12">
                <a href="https://github.com/ayubliaqat" target="_blank" className="text-3xl text-[#1e3d59] hover:text-orange-400 transition-transform hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ayub-liaqat-716a9a11a/" target="_blank" className="text-3xl text-[#1e3d59] hover:text-orange-400 transition-transform hover:-translate-y-1">
                  <FaLinkedin />
                </a>
                <Link
                  href="/resume"
                  className="px-8 py-3 rounded-2xl font-bold bg-[#1e3d59] text-white shadow-lg hover:bg-[#2d5a83] hover:scale-105 transition-all"
                >
                  View Resume
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8 border-t border-gray-100">
                <Link
                  href="#projects"
                  className="px-10 py-4 rounded-2xl font-bold bg-white text-[#1e3d59] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-inner transition-all flex items-center justify-center gap-2"
                >
                  View Projects <FiArrowRight />
                </Link>
                <Link
                  href="#contact"
                  className="px-10 py-4 rounded-2xl font-bold bg-orange-300 text-[#1e3d59] shadow-lg hover:brightness-105 hover:scale-105 transition-all"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}