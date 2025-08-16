"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Courier Tracking Platform",
    description:
      "A web app to track multiple courier services with real-time updates using Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "AI Chatbot",
    description:
      "A chatbot powered by Python, FastAPI, and OpenAI API for natural conversation handling.",
    tech: ["Python", "FastAPI", "OpenAI API"],
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-featured MERN stack e-commerce platform with authentication, payments, and order tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "Interactive data visualization dashboard using React and D3.js for insights.",
    tech: ["React", "D3.js", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-gray-50"
      aria-label="Projects Section - Ayub Liaqat"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          🚀 Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="neumorphic bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#1e3d59]/10 text-[#1e3d59] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-[#1e3d59] text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:scale-105 transition-transform duration-300"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
