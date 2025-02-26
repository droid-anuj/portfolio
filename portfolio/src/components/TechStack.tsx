// src/components/TechStack.tsx
"use client";
import { motion } from "framer-motion";
import { Star, BookOpen, Compass } from "lucide-react";
import { JSX } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiDjango, SiGraphql, 
  SiDocker, SiKubernetes, SiAmazon, SiMongodb, SiPython, SiGit, SiMysql
} from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  React: <SiReact className="w-6 h-6" />,
  "Next.js": <SiNextdotjs className="w-6 h-6" />,
  TypeScript: <SiTypescript className="w-6 h-6" />,
  "Tailwind CSS": <SiTailwindcss className="w-6 h-6" />,
  "Node.js": <SiNodedotjs className="w-6 h-6" />,
  Django: <SiDjango className="w-6 h-6" />,
  GraphQL: <SiGraphql className="w-6 h-6" />,
  Docker: <SiDocker className="w-6 h-6" />,
  Kubernetes: <SiKubernetes className="w-6 h-6" />,
  AWS: <SiAmazon className="w-6 h-6" />,
  MongoDB: <SiMongodb className="w-6 h-6" />,
  Python: <SiPython className="w-6 h-6" />,
  Git: <SiGit className="w-6 h-6" />,
  "Database Management": <SiMysql className="w-6 h-6" />,  // Used MySQL as a placeholder
};


const TechStack = () => {
  const techStack = {
    regular: ["React", "Next.js", "TypeScript", "Tailwind CSS","Django","Python"],
    knowledge: ["Node.js", "MongoDB", "GraphQL","Machine Learning","OOPS","Database Management" ],
    familiarity: ["Docker", "Kubernetes", "AWS","Git"],
  };

  const categoryIcons = {
    regular: <Star className="w-6 h-6" />,
    knowledge: <BookOpen className="w-6 h-6" />,
    familiarity: <Compass className="w-6 h-6" />
  };

  const proficiencyLevels = {
    regular: "w-4/5",
    knowledge: "w-3/5",
    familiarity: "w-2/5"
  };

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-highlight/20 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-warning to-highlight bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-highlight/10 rounded-2xl transform group-hover:-rotate-1 transition-transform" />
                <div className="relative p-8 bg-primary/50 rounded-2xl border border-highlight/30 backdrop-blur-sm hover:border-highlight transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-highlight/10 rounded-xl">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="text-2xl font-bold text-highlight capitalize">
                      {category}
                    </h3>
                  </div>

                  {/* Proficiency level indicator */}
                  <div className="mb-8">
                    <div className="h-1 bg-highlight/10 rounded-full">
                      <motion.div
                        className={`h-full bg-highlight rounded-full ${proficiencyLevels[category as keyof typeof proficiencyLevels]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {techs.map((tech, index) => (
                      <motion.li
                        key={tech}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-white text-black rounded-lg hover:bg-white/2 transition-colors"
                      >
                        <motion.div
                          className="p-2 bg-highlight/10 rounded-lg"
                          whileHover={{ rotate: 20 }}
                        >
                          {techIcons[tech]}
                        </motion.div>
                        <span className="text-black">{tech}</span>
                        
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-8 left-12 w-24 h-24 bg-warning/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 right-12 w-16 h-16 bg-highlight/20 rounded-full blur-xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;