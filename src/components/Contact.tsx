"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-16 bg-white neumorphic bg-white ml-20 mr-20 mb-20"
      aria-label="Contact - Ayub Liaqat"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          📩 Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="neumorphic bg-white rounded-2xl p-8 bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="neumorphic bg-white w-full px-4 py-3 rounded-xl bg-white shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] outline-none focus:ring-2 focus:ring-[#1e3d59]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="neumorphic bg-white w-full px-4 py-3 rounded-xl bg-white shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] outline-none focus:ring-2 focus:ring-[#1e3d59]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="neumorphic bg-white w-full px-4 py-3 rounded-xl bg-white shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] outline-none focus:ring-2 focus:ring-[#1e3d59]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="neumorphic bg-white w-full py-3 rounded-xl bg-white text-[#1e3d59] font-semibold shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-center items-center md:items-start space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 text-lg text-center md:text-left">
              Feel free to connect with me on social platforms or drop me an
              email. I’ll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href="mailto:ayubliaqat@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic bg-white flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] text-[#1e3d59] hover:text-blue-600 transition"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
              <a
                href="https://linkedin.com/in/ayubliaqat"
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic bg-white flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] text-[#1e3d59] hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href="https://github.com/ayubliaqat"
                target="_blank"
                rel="noopener noreferrer"
                className=" neumorphic bg-white flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] text-[#1e3d59] hover:text-blue-600 transition"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
