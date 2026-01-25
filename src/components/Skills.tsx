"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Skills() {
  const languages = [
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "Dart",
    "HTML/CSS",
  ];

  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center py-12 bg-white scroll-mt-28"
      aria-label="Skills Section - Ayub Liaqat"
    >
      {/* Section Title */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <FaCode className="text-orange-400 w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3d59]">
            Skills
          </h2>
        </div>
        <div className="h-1.5 w-20 bg-orange-400 rounded-full" />
      </motion.div>

      {/* Two Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full px-6">
        {/* Programming Languages Card */}
        <motion.div
          className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3d59] mb-8 text-center md:text-left">
            Programming Languages
          </h3>
          <ul className="grid grid-cols-2 gap-5">
            {languages.map((lang, index) => (
              <motion.li
                key={index}
                className="px-4 py-3 rounded-xl bg-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] text-gray-700 font-bold text-center border border-gray-50/50 cursor-default"
                whileHover={{
                  scale: 0.98,
                  boxShadow:
                    "inset 4px 4px 8px #cbcbcb, inset -4px -4px 8px #ffffff",
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {lang}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies & Frameworks Card */}
        <motion.div
          className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#1e3d59] mb-8 text-center md:text-left">
            Technologies & Frameworks
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {technologies.map((tech, index) => (
              <motion.li
                key={index}
                className="px-2 py-3 rounded-xl bg-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] text-gray-700 font-bold text-center border border-gray-50/50 flex items-center justify-center text-sm sm:text-base cursor-default"
                whileHover={{
                  scale: 0.98,
                  boxShadow:
                    "inset 4px 4px 8px #cbcbcb, inset -4px -4px 8px #ffffff",
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
