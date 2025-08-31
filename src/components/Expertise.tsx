"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Shield } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: <Code className="w-8 h-8 text-[#1e3d59]" aria-hidden="true" />,
      title: "Full Stack Next.js Development",
      desc: "Building scalable web applications with Next.js, React.js, Node.js, and Express.js, using SSR, SSG, and API routes.",
    },
    {
      icon: <Database className="w-8 h-8 text-[#1e3d59]" aria-hidden="true" />,
      title: "APIs & Databases",
      desc: "Designing REST & GraphQL APIs, integrating with MongoDB and PostgreSQL for robust full-stack applications.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#1e3d59]" aria-hidden="true" />,
      title: "Deployment & Cloud",
      desc: "Deploying Next.js apps on Vercel, Netlify, AWS, and using Docker with CI/CD pipelines for efficient workflows.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#1e3d59]" aria-hidden="true" />,
      title: "Responsive & UI Design",
      desc: "Creating mobile-first, responsive, and user-friendly interfaces using Tailwind CSS and modern UI best practices.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1e3d59]" aria-hidden="true" />,
      title: "Security & Performance",
      desc: "Implementing authentication, authorization, caching, and performance optimization for production-ready Next.js apps.",
    },
  ];

  return (
    <section
      id="expertise"
      className="min-h-screen flex items-center py-16 bg-gray-50"
      aria-label="Expertise Section - Ayub Liaqat"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span aria-hidden="true">💼</span>{" "}
          <span className="sr-only">Portfolio</span>
          Expertise
        </motion.h2>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              className="neumorphic bg-white rounded-2xl p-6 shadow-lg flex flex-col items-start gap-3 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              aria-label={`${item.title} - ${item.desc}`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#1e3d59]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
