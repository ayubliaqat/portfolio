"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const messageText = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // Frontend validation
    if (!name || !email || !messageText) {
      setMessage("❌ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: messageText }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        setMessage(`❌ ${result.error || "Failed to send message."}`);
      }
    } catch (err: unknown) {
      console.error("Contact form error:", err);
      if (err instanceof Error) {
        setMessage(`❌ ${err.message}`);
      } else {
        setMessage("❌ Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-16 bg-white ml-20 mr-20 mb-20">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.h2 className="text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          📩 Get in Touch
        </motion.h2>

        <div className="neumorphic bg-white grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            className="neumorphic bg-white rounded-2xl p-8 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] space-y-6"
          >
            <input type="text" name="name" placeholder="Your Name" required
              className="neumorphic w-full px-4 py-3 rounded-xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-[#1e3d59]" />
            <input type="email" name="email" placeholder="you@example.com" required
              className="neumorphic w-full px-4 py-3 rounded-xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-[#1e3d59]" />
            <textarea name="message" rows={4} placeholder="Write your message..." required
              className="neumorphic w-full px-4 py-3 rounded-xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-[#1e3d59]" />
            <button type="submit" disabled={loading}
              className="neumorphic w-full py-3 rounded-xl text-[#1e3d59] font-semibold shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {message && <p className={`text-center mt-2 ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>{message}</p>}
          </motion.form>

          <motion.div className="flex flex-col justify-center items-center md:items-start space-y-6">
            <p className="text-gray-700 text-lg text-center md:text-left">
              Feel free to connect with me on social platforms or drop me an email.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a href="mailto:mayub7540@gmail.com" className="neumorphic flex items-center gap-3 px-4 py-2 rounded-xl text-[#1e3d59] hover:text-blue-600">
                <Mail className="w-5 h-5" /> Email
              </a>
              <a href="https://linkedin.com/in/ayubliaqat" className="neumorphic flex items-center gap-3 px-4 py-2 rounded-xl text-[#1e3d59] hover:text-blue-600">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="https://github.com/ayubliaqat" className="neumorphic flex items-center gap-3 px-4 py-2 rounded-xl text-[#1e3d59] hover:text-blue-600">
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
