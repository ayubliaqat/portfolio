"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaUser, FaGraduationCap, FaCode } from "react-icons/fa";

export default function About() {
  // FIXED: Removed unused useReducedMotion and reduceMotion variable

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 md:px-8 bg-white scroll-mt-28"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaUser className="text-orange-400 w-8 h-8" />
          <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-[#1e3d59]">
            About Me
          </h2>
        </div>
        <div className="h-1.5 w-20 bg-orange-400 rounded-full" />
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-12 gap-10 items-start">
        
        {/* LEFT: The Image Profile */}
        <motion.div 
          className="md:col-span-5 flex justify-center sticky top-32"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Neumorphic Frame */}
            <div className="p-4 rounded-[2rem] bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/assets/ayub3.png" 
                alt="Ayub Liaqat"
                width={400}
                height={400}
                className="rounded-[1.5rem] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1e3d59] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-2xl font-bold">Next.js</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Career-Level Developer</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: The Details */}
        <div className="md:col-span-7 flex flex-col gap-8">
          
          {/* Professional Bio */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white shadow-[10px_10px_30px_#e2e2e2,-10px_-10px_30px_#ffffff] border border-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#1e3d59] mb-4 flex items-center gap-2">
              <FaCode className="text-orange-400" /> My Developer Journey
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I am a specialized <strong>Next.js Developer</strong> with a deep passion for 
              architecting scalable web applications. My approach is centered on 
              <strong>clean code</strong> and <strong>native performance</strong>. I don&apos;t 
              just build interfaces; I build complete digital ecosystems with custom-engineered 
              backend logic.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white shadow-[10px_10px_30px_#e2e2e2,-10px_-10px_30px_#ffffff] border border-gray-50"
          >
            <h3 className="text-2xl font-bold text-[#1e3d59] mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-orange-400" /> Education
            </h3>
            <div className="border-l-4 border-orange-400 pl-4">
              <h4 className="text-xl font-bold text-[#1e3d59]">BS Information Technology</h4>
              <p className="text-gray-500 font-medium">University of Education, Lahore</p>
              <div className="mt-4 flex flex-wrap gap-2">
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}