"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 scroll-mt-28"
    >
      {/* Main Heading */}
      <motion.h2
        id="about-heading"
        className="text-4xl font-extrabold text-[#1e3d59] mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        className="neumorphic bg-white max-w-5xl w-full mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        animate={
          reduceMotion ? undefined : { y: [0, -10, 0, 10, 0] }
        }
        transition={
          reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Image FIRST on mobile, SECOND on desktop */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
        >
          <div className="neumorphic bg-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <Image
              src="/assets/ayub3.png"
              alt="Ayub Liaqat — Full Stack Developer"
              width={280}
              height={280}
              className="rounded-2xl object-cover"
              // Lazy by default (better for About section); provide responsive sizes
              sizes="(min-width: 768px) 280px, 70vw"
            />
          </div>
        </motion.div>

        {/* Text/Cards SECOND on mobile, FIRST on desktop */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* Education Card */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className="text-2xl font-bold text-[#1e3d59] mb-3">
              🎓 Education
            </h3>

            <h4 className="text-xl font-semibold text-[#1e3d59] mb-2">
              BS Information Technology (BS IT)
            </h4>

            <p className="text-gray-700 leading-relaxed mb-2">
              University of Education, Lahore.
            </p>

            <h4 className="text-xl font-semibold text-[#1e3d59] mb-2">
              Specialized In
            </h4>

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
            <h3 className="text-2xl font-bold text-[#1e3d59] mb-3">
              📄 Resume
            </h3>
            <p className="text-gray-700 mb-4">
              Explore my resume for more <br /> detailed information.
            </p>

            {/* Internal asset: use Link */}
            <Link
              href="/Ayub_Liaqat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 py-2 rounded-xl font-semibold bg-[#1e3d59] text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3d59]"
              aria-label="Download Resume PDF of Ayub Liaqat"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
