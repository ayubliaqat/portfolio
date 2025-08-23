"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center py-16 px-6"
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

      {/* Content Grid with floating animation */}
      <motion.div
        className="neumorphic bg-white max-w-5xl w-full mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Left Column - Cards */}
        <div className="flex flex-col gap-6">
          {/* Education Card */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            whileHover={{ scale: 1.04 }}
          >
            <h2 className="text-2xl font-bold text-[#1e3d59] mb-3">
              🎓 Education
            </h2>

            <h3 className="text-xl font-semibold text-[#1e3d59] mb-2">
              BS Information Technology (BS IT)
            </h3>

            <p className="text-gray-700 leading-relaxed mb-2">
              University of Education, Lahore.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3d59] mb-2">
              Specialized In
            </h3>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Web Development</li>
              <li>Database Management</li>
              <li>Software Engineering</li>
            </ul>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            <h2 className="text-2xl font-bold text-[#1e3d59] mb-3">
              📄 Resume
            </h2>
            <p className="text-gray-700 mb-4">
              Explore my resume for more <br />detailed
              information.
            </p>
            <a
              href="/Ayub_Liaqat_Resume.pdf"
              target="_blank"
              className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-md hover:scale-105 transition-transform duration-300"
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
          whileHover={{ scale: 1.04 }}
        >
          <div className="neumorphic bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <Image
              src="/assets/ayub3.png"
              alt="Ayub Liaqat - Full Stack Developer"
              width={280}
              height={280}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
