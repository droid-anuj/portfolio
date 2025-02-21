// src/components/AddOnCourses.tsx
"use client";
import { motion } from "framer-motion";
import { Bookmark,  GraduationCap } from "lucide-react";

const AddOnCourses = () => {
  const courses = [
    {
      title: "React Advanced",
      institution: "Udemy",
      year: 2023,
      description:
        "Deep dive into React patterns, hooks, and performance optimization.",
      icon: <Bookmark className="w-6 h-6" />,
      skills: ["Hooks", "Context API", "Performance", "Testing"]
    },
    {
      title: "Next.js Mastery",
      institution: "Coursera",
      year: 2022,
      description:
        "Comprehensive guide to building SSR and static sites with Next.js.",
      icon: <Bookmark className="w-6 h-6" />,
      skills: ["SSR", "Static Generation", "API Routes", "Optimization"]
    },
    {
      title: "TypeScript Fundamentals",
      institution: "Pluralsight",
      year: 2023,
      description:
        "Learn the basics of TypeScript and how to integrate it into modern projects.",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Type System", "Generics", "Decorators", "Tooling"]
    },
  ];

  return (
    <section id="courses" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-warning/20 rounded-full blur-3xl"
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
            className="text-5xl font-bold text-center mb-16 text-textPrimary"
          >
            <span className=" bg-clip-text">
              Courses & Certifications
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-highlight/10 rounded-2xl transform group-hover:rotate-1 transition-transform" />
                <div className="relative p-8 bg-primary/50 rounded-2xl border border-highlight/30 backdrop-blur-sm hover:border-highlight transition-colors">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-highlight/10 rounded-full">
                      {course.icon}
                    </div>
                    <span className="px-3 py-1 bg-highlight/10 text-highlight rounded-full text-sm">
                      {course.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-highlight mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-4">
                    {course.institution}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-highlight/10 text-highlight rounded-full text-sm hover:bg-highlight/20 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-8 right-12 w-24 h-24 bg-highlight/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 left-12 w-16 h-16 bg-warning/20 rounded-full blur-xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AddOnCourses;