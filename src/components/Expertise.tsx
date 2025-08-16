"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain, Smartphone, Shield } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: <Code className="w-8 h-8 text-[#1e3d59]" />,
      title: "Full Stack Web Development",
      desc: "Building modern, responsive, and scalable web applications using MERN, Next.js, and Spring Boot.",
    },
    {
      icon: <Database className="w-8 h-8 text-[#1e3d59]" />,
      title: "Backend APIs & Microservices",
      desc: "Designing secure, high-performance REST & GraphQL APIs with Node.js, Django, and FastAPI.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#1e3d59]" />,
      title: "Cloud & DevOps",
      desc: "Deploying and managing apps on AWS, Azure, Docker, and Kubernetes with CI/CD pipelines.",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#1e3d59]" />,
      title: "AI & Data Science",
      desc: "Applying ML models, data analysis, and automation with Python, TensorFlow, and MATLAB.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#1e3d59]" />,
      title: "Mobile-Friendly Design",
      desc: "Creating responsive and mobile-first designs for seamless user experiences.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1e3d59]" />,
      title: "Security & Scalability",
      desc: "Implementing authentication, authorization, and performance tuning for production-ready systems.",
    },
  ];

  return (
    <section
      id="expertise"
      className="min-h-screen flex items-center py-16 bg-gray-50"
      aria-label="Expertise Section - Ayub Liaqat"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          💼 Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              className="neumorphic bg-white rounded-2xl p-6 shadow-lg flex flex-col items-start gap-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#1e3d59]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
