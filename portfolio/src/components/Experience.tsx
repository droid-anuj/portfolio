// src/components/Experience.tsx
"use client";
import { Briefcase, Rocket, Code, Target, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Self-Employed",
      role: "Freelance Backend Developer",
      duration: "Aug 2025 - Jan 2026",
      status: "Previous",
      description: "Architected and delivered the backend for a production-ready EdTech mobile application. Managed the end-to-end development lifecycle, cloud deployment, and performance tuning.",
      icon: <Briefcase className="w-7 h-7" />,
      companyType: "Remote Freelance",
      highlights: {
        techStack: ["Django", "Firebase", "PostgreSQL", "Firestore", "REST APIs", "iOS/Android Integration"],
        achievements: [
          "Architected and delivered the backend for a production-ready EdTech mobile application using Django, Firebase, and PostgreSQL.",
          "Implemented secure user authentication, real-time data sync, and role-based access control using Firebase Authentication and Firestore.",
          "Designed and optimized REST APIs handling high concurrency with seamless iOS/Android integration.",
          "Managed end-to-end development lifecycle including system architecture, cloud deployment, and performance tuning."
        ]
      }
    },
    {
      company: "Bigfig.AI",
      role: "Software Development Engineer I",
      duration: "Nov 2024 - May 2025",
      status: "Previous",
      description: "Scaled backend services, improved database query efficiency, and delivered critical modules for SaaS platform.",
      icon: <Rocket className="w-7 h-7" />,
      companyType: "Bengaluru, Remote",
      highlights: {
        techStack: ["Django", "PostgreSQL", "Python", "REST APIs", "Query Optimization"],
        achievements: [
          "Scaled Django backend services to support 1000+ daily active users, improving API reliability by 35%.",
          "Reduced database query latency by 30% through targeted PostgreSQL indexing and query optimization.",
          "Delivered two internal platform modules on schedule, collaborating closely with product and engineering teams."
        ]
      }
    },
    {
      company: "Bigfig.AI",
      role: "Software Development Engineer Intern",
      duration: "Mar 2024 - Nov 2024",
      status: "Previous",
      description: "Developed REST APIs using Django REST Framework and optimized application performance using caching and OAuth integration.",
      icon: <Code className="w-7 h-7" />,
      companyType: "Bengaluru, Remote",
      highlights: {
        techStack: ["Django", "Django REST Framework", "OAuth 2.0", "Redis", "PostgreSQL", "Python"],
        achievements: [
          "Built and maintained REST APIs using Django REST Framework, saving 15 hours of development time per sprint.",
          "Integrated OAuth 2.0 authentication flows, improving login performance by 30%.",
          "Optimized application response speed by 25% through Redis caching and database query improvements."
        ]
      }
    },
    {
      company: "Unity Labs",
      role: "Full Stack Developer Intern",
      duration: "Jan 2024 - Mar 2024",
      status: "Previous",
      description: "Developed reusable UI components using React and Next.js and optimized dashboard API integrations.",
      icon: <Briefcase className="w-7 h-7" />,
      companyType: "Remote Intern",
      highlights: {
        techStack: ["React", "Next.js", "REST APIs", "JavaScript", "TypeScript"],
        achievements: [
          "Developed 15+ reusable UI components with React and Next.js, accelerating feature delivery by 20%.",
          "Optimized dashboard API integrations, reducing frontend load time by 25%.",
          "Delivered fully responsive, cross-browser compatible interfaces across all major platforms."
        ]
      }
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions and scaling backend systems
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-yellow-600 rounded-full hidden md:block" />
            
            {experiences.map((exp) => (
              <div key={exp.company} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full border-4 border-white shadow-lg hidden md:flex md:items-center md:justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                
                {/* Experience Card */}
                <div className="md:ml-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-200/60 shadow-xl shadow-orange-500/5 p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-500">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-6">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center">
                          <div className="text-orange-600">
                            {exp.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600">{exp.companyType}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                          <Calendar className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-gray-700">{exp.duration}</span>
                        </div>
                        {exp.status === "Current" && (
                          <div className="px-4 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                            Current Role
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {exp.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Tech Stack */}
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Code className="w-5 h-5 text-orange-600" />
                          <h4 className="text-lg font-bold text-gray-900">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/80 text-gray-700 rounded-lg text-sm font-medium border border-orange-100 hover:bg-white hover:border-orange-200 hover:scale-105 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-5 h-5 text-yellow-600" />
                          <h4 className="text-lg font-bold text-gray-900">Key Achievements</h4>
                        </div>
                        <div className="space-y-2">
                          {exp.highlights.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200/60 p-8 shadow-lg">
            <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              From full-stack development to software engineering, I&apos;ve grown through diverse 
              technical challenges and contributed to scalable systems across SaaS and EdTech. Currently focused on 
              building high-performance APIs, database optimization, and robust backend architectures.
            </p>
          </div>
        </div>

        {/* Static decorative elements */}
        <div className="absolute bottom-16 left-8 w-20 h-20 bg-orange-400/20 rounded-2xl blur-sm" />
        <div className="absolute top-32 right-12 w-16 h-16 bg-yellow-500/20 rounded-2xl blur-sm" />
      </div>
    </section>
  );
};

export default Experience;