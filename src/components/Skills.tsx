"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C/C++",
    "HTML/CSS",
    "MATLAB",
  ];

  const technologies = [
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Spring Boot",
    "FastAPI",
    "Flask",
    "Django",
    "MongoDB",
    "SQL",
    "Redis",
    "Docker",
    "AWS",
    "Azure",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center py-16 bg-gradient-to-b from-white to-gray-50"
      aria-label="Skills Section - Ayub Liaqat"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-[#1e3d59] mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        A breakdown of my technical expertise — from programming languages to
        modern frameworks and technologies.
      </motion.p>

      {/* Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-6">
        {/* Programming Languages */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 neumorphic"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-[#1e3d59] mb-6">
            Programming Languages
          </h3>
          <ul className="grid grid-cols-2 gap-3 text-gray-700 font-medium">
            {languages.map((lang, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 rounded-lg neumorphic bg-white hover:bg-gray-200 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {lang}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies & Frameworks */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 neumorphic"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-[#1e3d59] mb-6">
            Technologies & Frameworks
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 font-medium">
            {technologies.map((tech, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 rounded-lg neumorphic bg-white hover:bg-gray-200 transition"
                initial={{ opacity: 0, y: 20 }}
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
