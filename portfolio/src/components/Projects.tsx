// src/components/Projects.tsx
"use client";
import { Github, ExternalLink, Code2, Calendar, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "VisionPad -- Real-Time Collaboration Platform",
      description:
        "A real-time collaborative whiteboard platform supporting multi-user live sync with sub-200ms latency.",
      tech: ["Next.js", "React", "Liveblocks", "Clerk", "Convex", "TypeScript"],

      featured: true,
      highlights: [
        "Built real-time collaborative whiteboard supporting multi-user live sync with sub-200ms latency using Liveblocks.",
        "Enforced secure role-based authentication and persistent shared state with Clerk and Convex.",
        "Led end-to-end architecture planning and deployed on Vercel with zero-downtime releases."
      ],
      links: {
        demo: "https://vision-pad-83a.vercel.app",
        code: "https://github.com/droid-anuj/vision-pad"
      }
    },
    {
      name: "MirrorAPI -- Developer API Toolkit",
      description:
        "A full-stack API development toolkit enabling developers to instantly create mock endpoints, inspect live webhooks, and clone external APIs.",
      tech: ["Django", "Django REST Framework", "Django Channels", "React", "WebSockets"],

      featured: true,
      highlights: [
        "Built a full-stack API development toolkit enabling developers to instantly create mock endpoints, inspect live webhooks, and clone external APIs for local testing.",
        "Implemented real-time webhook inspection using Django Channels and WebSockets, streaming live payloads directly to the browser.",
        "Engineered an API cloning feature supporting authenticated external requests with custom headers and body capture.",
        "Deployed backend on Render and frontend on Vercel with a multi-tenant namespace architecture."
      ],
      links: {
        demo: "https://mirror-api-seven.vercel.app/",
        code: "https://github.com/droid-anuj/MirrorAPI"
      }
    },
    {
      name: "FilmZ -- Movie Discovery Application",
      description:
        "A movie browsing and discovery platform with advanced search, filtering, and state management.",
      tech: ["React", "Redux", "TMDB API", "JavaScript"],

      featured: false,
      highlights: [
        "Developed movie browsing platform with Redux state management and TMDB API integration.",
        "Implemented advanced search and filtering, improving content discoverability and user experience."
      ],
      links: {
        demo: "#",
        code: "https://github.com/droid-anuj/Filmz"
      }
    },
    {
      name: "Medical Image Classification System",
      description:
        "A deep learning computer vision model and inference pipeline for clinical pneumonia detection.",
      tech: ["Python", "TensorFlow", "CNN", "Flask"],

      featured: false,
      highlights: [
        "Designed CNN model for pneumonia detection achieving 89% test accuracy on chest X-ray dataset.",
        "Deployed inference pipeline via Flask API for real-time medical image classification.",
        "Evaluated model performance using confusion matrix and AUC metrics to ensure clinical reliability."
      ],
      links: {
        demo: "#",
        code: "https://github.com/droid-anuj"
      }
    }
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Static background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${project.featured
                  ? 'lg:col-span-2 bg-gradient-to-br from-white/95 to-orange-50/95'
                  : 'bg-white/90'
                  } backdrop-blur-sm rounded-3xl border border-orange-200/60 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Featured Project
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-200 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.links.demo !== "#" && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-xl hover:from-orange-600 hover:to-yellow-700 transition-all duration-200 hover:scale-110 shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Achievements</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50/50 transition-colors">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-gray-700 rounded-lg text-sm font-medium border border-orange-200/50 hover:from-orange-200 hover:to-yellow-200 hover:border-orange-300 hover:scale-105 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200/60 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for additional projects and contributions to open source.
            </p>
            <a
              href="https://github.com/droid-anuj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View More Projects
            </a>
          </div>
        </div>

        {/* Static decorative elements */}
        <div className="absolute bottom-16 left-8 w-20 h-20 bg-orange-400/20 rounded-2xl blur-sm" />
        <div className="absolute top-32 right-12 w-16 h-16 bg-yellow-500/20 rounded-2xl blur-sm" />
      </div>
    </section>
  );
};

export default Projects;