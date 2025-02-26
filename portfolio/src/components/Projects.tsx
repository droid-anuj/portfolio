// src/components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "FilmZ - Web Application",
      description:
        "A user-friendly web app for movie enthusiasts to explore, review, and engage with their favorite films.",
      tech: ["React", "Redux", "Hooks"],
      highlights: [
        "Developed and deployed a responsive movie browsing web app using React and Redux.",
        "Integrated TMDB APIs for movie data and implemented search and filtering features, improving data retrieval speed by 26%."
      ],
      links: {
        demo: "#",
        code: "https://github.com/droid-anuj/Filmz"
      }
    },
    {
      name: "Image Classifier for Disease Detection",
      description:
        "An AI-powered image classification system using CNN to detect diseases in chest X-ray images.",
      tech: ["CNN", "EfficientNet-B0", "Python"],
      highlights: [
        "Achieved 92% accuracy on the validation set and 89% on the test set.",
        "Utilized separate generators for validation and test sets to optimize model performance.",
        "Applied ROC curve and AUROC analysis for enhanced disease diagnosis and treatment planning."
      ],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      name: "ShopSense: Inventory Management System",
      description:
        "A dynamic web application built with React.js to streamline inventory management for businesses.",
      tech: ["React.js", "MongoDB", "Node.js"],
      highlights: [
        "Developed a responsive frontend using React and a secure backend with Node.js and MongoDB.",
        "Implemented JWT-based authentication for enhanced user security."
      ],
      links: {
        demo: "#",
        code: "https://github.com/stickqz/IMS"
      }
    }
    ,
  {
    name: "Flexibble - Dribbble Clone",
    description:
      "A Dribbble-inspired platform built with Next.js for designers to showcase their creative work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    highlights: [
      "Developed a fully responsive UI with Next.js and Tailwind CSS for an enhanced user experience.",
      "Implemented user authentication and authorization using NextAuth.js.",
      "Built a backend with MongoDB and integrated real-time updates using WebSockets."
    ],
    links: {
      demo: "#",
      code: "https://github.com/droid-anuj/Flexibble/tree/main"
    }
  }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            <span className="text-textPrimary bg-clip-text ">
              Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-highlight/10 rounded-2xl transform group-hover:-rotate-1 transition-transform" />
                <div className="relative p-8 bg-primary/50 rounded-2xl border border-highlight/30 backdrop-blur-sm hover:border-highlight transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <Code2 className="w-8 h-8 text-highlight" />
                    <div className="flex gap-4">
                      <motion.a
                        href={project.links.code}
                        className="p-2 bg-highlight/10 rounded-full hover:bg-highlight/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-5 h-5 text-highlight" />
                      </motion.a>
                      <motion.a
                        href={project.links.demo}
                        className="p-2 bg-highlight/10 rounded-full hover:bg-highlight/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-5 h-5 text-highlight" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-highlight mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Section */}
                  <ul className="list-disc list-inside text-gray-400 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="mb-1">{highlight}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-highlight/10 text-highlight rounded-full text-sm"
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
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

export default Projects;
