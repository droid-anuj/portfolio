import React, { JSX } from 'react';
import { Star, BookOpen, Compass, Zap, Code2 } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiDjango,
  SiDocker, SiAmazon, SiMongodb, SiPython, SiGit, SiMysql, SiFirebase,
  SiCplusplus, SiPostman, SiPostgresql, SiRedis, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";

// ✅ Fix: give explicit type
const techIcons: Record<string, JSX.Element> = {
  Python: <SiPython className="w-6 h-6 text-[#3776AB]" />,
  Django: <SiDjango className="w-6 h-6 text-[#092E20]" />,
  PostgreSQL: <SiPostgresql className="w-6 h-6 text-[#4169E1]" />,
  "REST APIs": <Code2 className="w-6 h-6 text-orange-600" />,
  Git: <SiGit className="w-6 h-6 text-[#F05032]" />,
  React: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-black" />,
  TypeScript: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
  JavaScript: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
  "Node.js": <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
  Firebase: <SiFirebase className="w-6 h-6 text-[#FFCA28]" />,
  MongoDB: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
  Redis: <SiRedis className="w-6 h-6 text-[#DC382D]" />,
  Docker: <SiDocker className="w-6 h-6 text-[#2496ED]" />,
  AWS: <SiAmazon className="w-6 h-6 text-[#FF9900]" />,
  "C++": <SiCplusplus className="w-6 h-6 text-[#00599C]" />,
  Postman: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
  "HTML5 & CSS": <div className="flex gap-1"><SiHtml5 className="w-5 h-5 text-[#E34F26]" /><SiCss3 className="w-5 h-5 text-[#1572B6]" /></div>,
  "Database Management": <SiMysql className="w-6 h-6 text-[#4479A1]" />,
  "Data Structures & Algorithms": <Code2 className="w-6 h-6 text-purple-600" />,
  "System Design": <Code2 className="w-6 h-6 text-blue-600" />,
  OOPS: <Code2 className="w-6 h-6 text-green-600" />
};

const TechStack = () => {
  const techStack = {
    expert: {
      title: "Primary Stack",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-100 to-yellow-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      proficiency: "95%",
      techs: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"]
    },
    intermediate: {
      title: "Libraries & Cloud",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-100 to-purple-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      proficiency: "80%",
      techs: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Firebase", "MongoDB", "Redis", "AWS", "Docker"]
    },
    learning: {
      title: "CS & Languages",
      icon: <Compass className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-100 to-teal-100",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      proficiency: "75%",
      techs: ["C++", "HTML5 & CSS", "Data Structures & Algorithms", "System Design", "Database Management", "OOPS"]
    }
  };

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-300/10 to-yellow-400/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([key, category]) => (
              <div key={key} className="group relative">
                {/* Featured badge for expert level */}
                {key === 'expert' && (
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2 z-10">
                    <Zap className="w-4 h-4" />
                    Primary Skills
                  </div>
                )}

                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl border border-orange-200/60 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 p-8">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.bgColor} rounded-xl flex items-center justify-center ${category.textColor}`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.proficiency} Proficiency</p>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Proficiency Level</span>
                      <span>{category.proficiency}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        style={{ width: category.proficiency }}
                      />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h4>
                    {category.techs.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-4 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:from-orange-100 hover:to-yellow-100 transition-all duration-300 hover:scale-105 border border-orange-100"
                      >
                        <div className="p-2 bg-white rounded-lg shadow-sm hover:rotate-12 transition-transform duration-200">
                          {techIcons[tech] || <Code2 className="w-6 h-6 text-gray-600" />}
                        </div>
                        <span className="font-medium text-gray-800">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute bottom-16 left-8 w-20 h-20 bg-orange-400/20 rounded-2xl blur-sm" />
        <div className="absolute top-32 right-12 w-16 h-16 bg-yellow-500/20 rounded-2xl blur-sm" />
        <div className="absolute top-1/3 left-12 w-12 h-12 bg-orange-300/30 rounded-full blur-sm" />
      </div>
    </section>
  );
};

export default TechStack;
