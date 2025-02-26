// src/components/Bio.tsx
"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Bio = () => {
  const constraintsRef = useRef(null);
  const bioContent = [
    "I'm a passionate Full-Stack Developer with 1+ years of experience creating dynamic web applications.",
    "Specializing in modern tech stacks, I bridge the gap between complex requirements and user-friendly experiences.",
    "My mission: Build efficient digital solutions that make measurable impact."
  ];

  return (
    <section 
      id="about-me" 
      className="relative py-20 overflow-hidden"
      ref={constraintsRef}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-highlight/20 rounded-full blur-3xl"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-warning/30 rounded-full blur-3xl"
        animate={{ rotate: -360, scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-highlight/30 pointer-events-none"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-12"
          >
            <span className="text-textPrimary bg-clip-text">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {bioContent.map((text, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-gray-300 leading-relaxed relative pl-6 border-l-2 border-highlight/30 hover:border-highlight transition-colors"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform group-hover:rotate-2 transition-transform" />
              <div className="relative p-8 bg-primary/50 rounded-2xl border border-white/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Core Focus</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Full-Stack Development",
                    "Clean Architecture",
                    "API Integration",
                    "Cloud Solutions",
                    "Code Quality",
                    "AI Integration",
                    "LLM Applications"
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-white/10 text-textPrimary rounded-full text-sm hover:bg-highlight transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 -left-12 w-24 h-24 bg-warning/20 rounded-full blur-xl"
            drag
            dragConstraints={constraintsRef}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-12 -right-12 w-16 h-16 bg-highlight/20 rounded-full blur-xl"
            drag
            dragConstraints={constraintsRef}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;