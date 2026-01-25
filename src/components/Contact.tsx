"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    // 1. Simulate a brief "processing" delay for realism
    setTimeout(() => {
      setLoading(false);
      setStatus({ 
        type: "success", 
        msg: "✅ Message sent! I'll get back to you soon." 
      });
      
      // 2. Empty the fields
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000); 
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3d59] mb-4">Let&apos;s Connect</h2>
          <div className="h-1.5 w-24 bg-orange-400 rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl font-medium">
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
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
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white shadow-[inset_4px_4px_8px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 font-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1e3d59] ml-2">Email</label>
                  <input
                    type="email"
                    name="email"
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
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white shadow-[inset_4px_4px_8px_#e2e2e2,inset_-4px_-4px_8px_#ffffff] border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 font-medium transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#1e3d59] text-white font-bold shadow-lg hover:bg-orange-400 disabled:bg-slate-400 transition-all flex items-center justify-center gap-2 group"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
                {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {status.msg && (
                <motion.p 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center font-bold mt-4 text-green-600 bg-green-50 py-2 rounded-xl"
                >
                  {status.msg}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Sidebar remains the same */}
          <motion.div className="md:col-span-5 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-gray-50">
               <h3 className="text-2xl font-bold text-[#1e3d59] mb-6">Connect Directly</h3>
               <div className="flex flex-col gap-4">
                {[
                  { icon: <Mail />, label: "Email", href: "mailto:mayub7540@gmail.com", color: "hover:text-red-500" },
                  { icon: <Linkedin />, label: "LinkedIn", href: "https://linkedin.com/in/ayubliaqat", color: "hover:text-blue-600" },
                  { icon: <Github />, label: "GitHub", href: "https://github.com/ayubliaqat", color: "hover:text-black" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-4 rounded-2xl bg-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] text-[#1e3d59] font-bold transition-all hover:scale-[1.02] ${social.color}`}>
                    <span className="text-orange-400">{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}