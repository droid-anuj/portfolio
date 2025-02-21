// src/components/Education.tsx
"use client";
import { motion } from "framer-motion";
import { GraduationCap, Book, Code, Trophy } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Kota",
    duration: "2020 - 2024",
    description: "Focused extensively on software development principles, advanced data structures, algorithmic problem-solving, and modern web technologies. Maintained academic excellence throughout the program and graduated with Consistent Honors, consistently demonstrating strong analytical and technical capabilities.",
    highlights: [
      {
        icon: <Book className="w-5 h-5" />,
        title: "Core Subjects",
        items: ["Data Structures", "Algorithms", "Operating Systems", "Database Management"]
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Technical Skills",
        items: ["Full Stack Development", "System Design", "Cloud Computing", "AI/ML"]
      },
      {
        icon: <Trophy className="w-5 h-5" />,
        title: "Coding Excellence",
        items: [
          "300+ LeetCode Problems Solved",
          "Data Structures Expert",
          "Algorithm Specialist",
          "Problem-Solving Enthusiast"
        ]
      }
    ]
  };

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-warning/20 rounded-full blur-3xl"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16"
          >
            <span className="text-textPrimary bg-clip-text">
              Education
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Education Card */}
            <motion.div
              className="p-8 bg-primary/50 rounded-2xl border border-highlight/30 backdrop-blur-sm relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-highlight mb-2 mt-4">
                {education.degree}
              </h3>
              <p className="text-accent font-semibold mb-3">
                {education.institution}
              </p>
              <div className="inline-block px-4 py-1 bg-white text-accent rounded-full text-sm mb-4">
                {education.duration}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {education.description}
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-6">
              {education.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="p-6 bg-primary/30 rounded-xl border border-highlight/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      {highlight.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-highlight">
                      {highlight.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {highlight.items.map((item) => (
                      <motion.span
                        key={item}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm"
                        whileHover={{ y: -2 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-8 left-12 w-24 h-24 bg-highlight/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 right-12 w-16 h-16 bg-warning/20 rounded-full blur-xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;