"use client";
import { usePDF } from "react-to-pdf";
import { Globe, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const { toPDF, targetRef } = usePDF({ filename: "Ayub_Liaqat_Resume.pdf" });

  return (
    <div className="flex flex-col items-center mt-[140px] mb-20">
      {/* Download Button */}
      <button
        onClick={() => toPDF()}
        className="mb-10 bg-[#1e3d59] hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
      >
        📄 Download Resume
      </button>

      {/* Resume Content */}
      <div
        ref={targetRef}
        className="max-w-[850px] w-full shadow-2xl border border-gray-100 overflow-hidden font-sans bg-white text-[15px]"
      >
        <div className="flex flex-col md:flex-row min-h-[1100px]">
          {/* Left Column (Modern Blue Sidebar) */}
          <div className="w-full md:w-1/3 bg-[#1e3d59] text-white flex flex-col py-10 px-8">
            <div className="flex justify-center mb-8">
              <img
                src="/assets/ayub3.png"
                alt="Ayub Liaqat"
                className="w-32 h-32 object-cover rounded-2xl border-4 border-orange-400 shadow-xl"
              />
            </div>

            <div className="space-y-10">
              {/* Contact */}
              <section>
                <h2 className="text-orange-400 text-sm font-black uppercase tracking-widest border-b border-gray-600 pb-2 mb-4">
                  Contact
                </h2>
                <div className="space-y-3 text-sm text-gray-200">
                  <p className="flex flex-col">
                    <span className="text-white font-bold">Email</span>
                    mayub7540@gmail.com
                  </p>
                  <p className="flex flex-col">
                    <span className="text-white font-bold">Phone</span>
                    +92-3298638131
                  </p>
                  <p className="flex flex-col">
                    <span className="text-white font-bold">Location</span>
                    Lahore, Pakistan
                  </p>
                </div>

                {/* THE "WOW" PORTFOLIO LINK */}
                <div className="mt-8">
                  <p className="text-[10px] uppercase font-black text-gray-400 mb-2 ml-1">Live Portfolio</p>
                  <a 
                    href="https://ayubliaqat.vercel.app/" 
                    target="_blank" 
                    className="flex items-center justify-between gap-2 bg-white text-[#1e3d59] p-3 rounded-xl font-black text-[12px] shadow-lg hover:bg-orange-400 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Globe size={14} className="text-orange-400 group-hover:text-white" />
                      AYUBLIAQAT.APP
                    </div>
                    <ExternalLink size={12} className="opacity-50" />
                  </a>
                </div>
              </section>

              {/* Core Expertise */}
              <section>
                <h2 className="text-orange-400 text-sm font-black uppercase tracking-widest border-b border-gray-600 pb-2 mb-4">
                  Technical Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 15",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "MongoDB",
                    "Node.js",
                    "Mongoose",
                    "Zod",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-700/50 px-2 py-1 rounded text-[12px] border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-orange-400 text-sm font-black uppercase tracking-widest border-b border-gray-600 pb-2 mb-4">
                  Languages
                </h2>
                <ul className="text-sm space-y-2 text-gray-200 font-bold">
                  <li>English (Professional)</li>
                  <li>Urdu (Native)</li>
                  <li>Punjabi</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3 bg-white text-gray-800 p-10">
            <header className="mb-10">
              <h1 className="text-4xl font-black text-[#1e3d59] uppercase tracking-tighter leading-tight">
                Ayub Liaqat
              </h1>
              <p className="text-xl text-orange-400 font-bold">
                Full-Stack Next.js Developer
              </p>
            </header>

            {/* Profile Summary */}
            <section className="mb-10">
              <h2 className="text-lg font-black text-[#1e3d59] border-b-2 border-gray-100 pb-2 mb-4 flex items-center gap-2 uppercase tracking-tight">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify font-medium">
                I am a Next.js Developer who believes in building logic from the
                ground up rather than relying on third-party APIs. With a
                background in Game Development at Tkxel, I bring a deep
                understanding of performance and complex problem-solving to the
                web. I specialize in creating fast, secure, and custom-coded
                websites.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-lg font-black text-[#1e3d59] border-b-2 border-gray-100 pb-2 mb-4 uppercase tracking-tight">
                Work Experience
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-gray-900 uppercase">
                      Next.js Developer
                    </h3>
                    <span className="text-[10px] font-black bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-100">
                      March-2025 – Dec-2025
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-500 mb-2">
                    Zappysols
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-600">
                    <li>
                      Developed scalable business solutions using **Next.js
                      Server Actions** for efficient data mutations.
                    </li>
                    <li>
                      Designed complex **Mongoose schemas** to handle
                      large-scale data relationships.
                    </li>
                    <li>
                      Integrated **Tailwind CSS** for mobile-first,
                      high-performance user interfaces.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-gray-900 uppercase">
                      Game Developer Intern
                    </h3>
                    <span className="text-[10px] font-black bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                      Jan-2024 – Feb-2025
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-500 mb-2">
                    Bitsoft Solution
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-600">
                    <li>
                      Built responsive web components focusing on clean,
                      maintainable code architecture.
                    </li>
                    <li>
                      Optimized page load speeds by implementing **Static Site
                      Generation (SSG)** and caching.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-black text-[#1e3d59] border-b-2 border-gray-100 pb-2 mb-4 uppercase tracking-tight">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-black text-gray-900 text-sm uppercase">
                    BS Information Technology
                  </h3>
                  <p className="text-sm text-gray-600">
                    University of Education Lahore | 2018 – 2023
                  </p>
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-sm uppercase">
                    Intermediate
                  </h3>
                  <p className="text-sm text-gray-600">
                    Govt. Degree College Shujabad | 2016 – 2018
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}