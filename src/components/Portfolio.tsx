"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Zappysols",
    description:
      "A software development company website showcasing services and projects using Next.js.",
    demo: "https://zappysols.com/",
    github: "https://github.com/ayubliaqat/zappysols",
  },
  {
    title: "Luxino",
    description:
      "An e-commerce site for a sneaker brand with product listings and secure checkout.",
    demo: "#",
    github: "#",
  },
  {
    title: "TrackingOdyssey",
    description:
      "A courier tracking platform providing real-time shipment updates across multiple services.",
    demo: "https://trackingodyssey.com/",
    github: "https://github.com/ayubliaqat/trackingodyssey",
  },
  {
    title: "ElectricityBillTracker",
    description:
      "A simple web app to check and manage electricity bills online efficiently.",
    demo: "https://pakbill.vercel.app/",
    github: "https://github.com/ayubliaqat/pakbill",
  },
  {
    title: "Professional Portfolio",
    description:
      "A clean and responsive personal portfolio to showcase projects and skills.",
    demo: "https://ayubliaqat.vercel.app/",
    github: "https://github.com/ayubliaqat/portfolio",
  },
  {
    title: "TrackParcel",
    description:
      "A courier tracking website offering live parcel status updates and integration.",
    demo: "https://trackparcels.vercel.app/",
    github: "https://github.com/ayubliaqat/trackparcels",
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
          <span aria-hidden="true">🚀</span>{" "}
          <span className="sr-only">Portfolio</span>
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="neumorphic bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              aria-label={`Project: ${project.title}`}
            >
              <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e3d59] text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
