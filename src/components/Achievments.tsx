"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center py-16 bg-gray-50"
      aria-label="Achievements and Certifications - Ayub Liaqat"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#1e3d59] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          🏆 Achievements & Certifications
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievement 1 */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
              🥇 Hackathon Winner
            </h3>
            <p className="text-gray-700">
              Secured 1st place in XYZ National Hackathon by building a
              real-time courier tracking system with AI-powered predictions.
            </p>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
              📜 AWS Certified Developer
            </h3>
            <p className="text-gray-700">
              Earned the AWS Developer Associate Certification showcasing cloud
              application development and deployment expertise.
            </p>
          </motion.div>

          {/* Achievement 3 */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
              🎓 Google Cloud Certified
            </h3>
            <p className="text-gray-700">
              Achieved Google Cloud Associate Certification for cloud-native app
              development and deployment.
            </p>
          </motion.div>

          {/* Achievement 4 */}
          <motion.div
            className="neumorphic bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#1e3d59] mb-3">
              📚 Online Courses
            </h3>
            <p className="text-gray-700">
              Completed certifications from platforms like Coursera, Udemy, and
              FreeCodeCamp in Full-Stack Development and AI/ML.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
