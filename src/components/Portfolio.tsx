"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Logic-First Blog Engine",
    desc: "A high-performance CMS built with native Next.js 15 Server Actions and MongoDB. Featuring a custom-coded SEO slugify utility and strict Zod validation—architected without third-party CMS APIs for total data control.",
    tech: ["Next.js 15", "MongoDB", "TypeScript", "Tailwind"],
    github: "https://github.com/ayubliaqat/next-cms",
    live: "https://next-cms-rosy-nine.vercel.app/admin/dashboard",
    image: "/assets/blog.jpg",
    stats: { logic: "Custom CMS", db: "Mongoose" }
  },
  {
    title: "ZappySols Business Suite",
    desc: "A high-performance business solution built with Next.js and Tailwind CSS. Developed custom server-side logic for secure data handling and optimized Mongoose schemas for rapid, scalable query execution.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/ayubliaqat/zappysols",
    live: "https://zappysols.com/",
    image: "/assets/zappysols.jpg",
    stats: { logic: "Server Actions", db: "MongoDB" }
  },
  {
    title: "FunSplash Media Gallery",
    desc: "A high-performance image discovery platform built with Next.js and Tailwind CSS. Focused on optimized image delivery, responsive grid layouts, and seamless asynchronous data fetching for a smooth visual experience.",
    tech: ["Next.js", "Tailwind CSS", "Lucide React", "Vercel"],
    github: "https://github.com/ayubliaqat/FunSplash",
    live: "https://funsplash-eight.vercel.app/",
    image: "/assets/riddles.jpg",
    stats: { logic: "Async Rendering", db: "External Media" }
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3d59]">Portfolio</h2>
          </div>
          <div className="h-1.5 w-24 bg-orange-400 rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl font-medium">
            Engineering real-world solutions by coding logic directly. 
            No shortcuts, just **pure performance**.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Image Column - Elevated Card (Ubra Hua) */}
              <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50 p-3 transition-all duration-500 group-hover:shadow-[30px_30px_70px_#b3b3b3,-30px_-30px_70px_#ffffff]">
                   <div className="aspect-video relative rounded-[1.8rem] overflow-hidden bg-gray-50">
                     <Image 
                       src={project.image} 
                       alt={project.title}
                       fill
                       priority={idx === 0}
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                   </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:order-1' : ''} space-y-6`}>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-wider border border-orange-100 shadow-sm">
                    <Code2 size={12} /> {project.stats.logic}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-wider border border-blue-100 shadow-sm">
                    <Database size={12} /> {project.stats.db}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3d59] leading-tight transition-colors group-hover:text-orange-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-medium">
                  {project.desc}
                </p>

                {/* Tech Tags - Inset (Dassa Hua) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[11px] font-bold text-gray-400 bg-white shadow-[inset_2px_2px_4px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#1e3d59] font-bold hover:text-orange-400 transition-colors border-b-2 border-transparent hover:border-orange-400"
                  >
                    <Github size={20} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 bg-[#1e3d59] text-white rounded-2xl font-bold shadow-lg hover:bg-orange-400 hover:-translate-y-1 active:scale-95 transition-all group/btn"
                  >
                    Live Demo <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}