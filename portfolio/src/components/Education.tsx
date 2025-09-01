// src/components/Education.tsx
"use client";

import { GraduationCap, Book, Code, Trophy, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Kota",
    duration: "2020 - 2024",
    location: "Kota, Rajasthan",
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
    <section id="education" className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
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
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation and technical excellence in computer science
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative backdrop-blur-xl bg-white/90 rounded-3xl border border-orange-200/50 shadow-2xl shadow-orange-500/10 p-12 hover:shadow-3xl hover:shadow-orange-500/15 transition-shadow duration-500">
            {/* Graduation Cap Icon */}
            <div className="absolute -top-8 left-12 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <div className="pt-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Degree Info */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    {education.degree}
                  </h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                    {education.institution}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {education.description}
                  </p>
                </div>

                {/* Duration & Location */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{education.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Location</p>
                      <p className="font-semibold text-gray-900">{education.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Academic & Technical Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {education.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200/60 p-8 hover:bg-white/90 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-orange-600">
                    {highlight.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h4>

                {/* Items */}
                <div className="space-y-3">
                  {highlight.items.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-yellow-50 text-gray-700 rounded-lg text-sm font-medium border border-orange-100/50 hover:from-orange-100 hover:to-yellow-100 hover:border-orange-200 hover:text-gray-800 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-full shadow-lg">
            <Trophy className="w-6 h-6" />
            <span className="font-bold text-lg">Graduated with Consistent Honors</span>
          </div>
        </div>

        {/* Static decorative elements */}
        <div className="absolute bottom-16 left-8 w-20 h-20 bg-orange-400/20 rounded-2xl blur-sm" />
        <div className="absolute top-32 right-12 w-16 h-16 bg-yellow-500/20 rounded-2xl blur-sm" />
        <div className="absolute top-1/2 left-12 w-2 h-2 bg-orange-500 rounded-full" />
        <div className="absolute bottom-1/3 right-16 w-1 h-1 bg-yellow-600 rounded-full" />
      </div>
    </section>
  );
};

export default Education; 