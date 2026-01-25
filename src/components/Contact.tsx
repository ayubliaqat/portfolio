"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setMessage("❌ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        setMessage(`❌ ${result.error || "Failed to send message."}`);
      }
    } catch (_err: unknown) {
      // Prefixed with underscore to satisfy ESLint unused variable rule
      setMessage("❌ Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* FIXED: Added &apos; for Let's */}
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3d59] mb-4">Let&apos;s Connect</h2>
          <div className="h-1.5 w-24 bg-orange-400 rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl font-medium">
            Have a project in mind or looking for a developer who understands raw logic? 
            Let&apos;s build something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form - Ubra Hua Card */}
          <motion.div 
            className="md:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1e3d59] ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ayub Liaqat"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white shadow-[inset_4px_4px_8px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 font-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1e3d59] ml-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white shadow-[inset_4px_4px_8px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 font-medium transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1e3d59] ml-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can I help you?"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white shadow-[inset_4px_4px_8px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 font-medium transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#1e3d59] text-white font-bold shadow-lg hover:bg-orange-400 transition-all flex items-center justify-center gap-2 group"
              >
                {loading ? "Processing..." : "Send Message"}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {message && (
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className={`text-center font-bold mt-4 ${message.startsWith("✅") ? "text-green-600" : "text-red-500"}`}
                >
                  {message}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Sidebar */}
          <motion.div 
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50">
              <h3 className="text-2xl font-bold text-[#1e3d59] mb-6">Connect Directly</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Mail />, label: "Email", href: "mailto:mayub7540@gmail.com", color: "hover:text-red-500" },
                  { icon: <Linkedin />, label: "LinkedIn", href: "https://linkedin.com/in/ayubliaqat", color: "hover:text-blue-600" },
                  { icon: <Github />, label: "GitHub", href: "https://github.com/ayubliaqat", color: "hover:text-black" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] text-[#1e3d59] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${social.color}`}
                  >
                    <span className="text-orange-400">{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-8 rounded-[2rem] bg-orange-50 border border-orange-100">
                <div className="flex items-center gap-3 text-orange-600 font-bold mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open for Opportunities
                </div>
                <p className="text-sm text-orange-800 font-medium">
                  {/* FIXED: Added &apos; for Let's */}
                  Currently available for Next.js and Full-Stack roles. Let&apos;s discuss your vision.
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}