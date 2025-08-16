"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="neumorphic bg-white min-h-screen flex flex-col items-center py-16 ml-20 mr-20"
      aria-label="About Section - Ayub Liaqat"
    >
      {/* Main Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-[#1e3d59] mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-2 items-center">
        {/* Left Column - Cards */}
        <div className="flex flex-col gap-6">
          {/* Education Card */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-bold text-[#1e3d59] mb-3">
              🎓 Education
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Bachelor in Computer Science from XYZ University.
              <br />
              Specialized in Full Stack Development, Web Applications, and Cloud
              Technologies.
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-bold text-[#1e3d59] mb-3">📄 Resume</h2>
            <p className="text-gray-700 mb-4">
              Explore my experience, skills, and projects in detail through my
              resume.
            </p>
            <a
              href="/Ayub_Liaqat_Resume.pdf"
              target="_blank"
              className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column - Profile Picture */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="neumorphic bg-white rounded-2xl p-4 shadow-lg">
            <Image
              src="/assets/ayub.png"
              alt="Ayub Liaqat - Full Stack Developer"
              width={300}
              height={300}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
