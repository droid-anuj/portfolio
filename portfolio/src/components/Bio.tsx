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
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50"
      ref={constraintsRef}
    >
      {/* Static gradient orbs - Responsive sizing */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-orange-400/20 via-yellow-500/20 to-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 rounded-full blur-3xl" />

      {/* Grid pattern overlay - Smaller on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative backdrop-blur-xl bg-white/80 rounded-2xl sm:rounded-3xl border border-orange-200/50 shadow-2xl shadow-orange-500/10">
          {/* Static border accent */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-orange-300/30" />
          
          <div className="relative p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-10 sm:mb-16 tracking-tight">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Bio Content */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
                {bioContent.map((text, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -left-3 sm:-left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-yellow-600 rounded-full group-hover:w-2 transition-all duration-300" />
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed pl-6 sm:pl-8 hover:text-gray-900 hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Focus Card */}
              <div className="relative order-1 lg:order-2">
                <div className="relative group perspective-1000">
                  {/* Glassmorphism card with warm theme */}
                  <div className="relative p-6 sm:p-8 lg:p-10 bg-white/60 rounded-2xl border border-orange-200/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-shadow duration-500">
                    {/* Shine effect on hover only */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent" />
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 sm:mb-8">
                      Core Focus
                    </h3>
                    
                    {/* Skills Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        "Full-Stack Development",
                        "Clean Architecture", 
                        "API Integration",
                        "Cloud Solutions",
                        "Code Quality",
                        "AI Integration",
                        "LLM Applications"
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="block px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 text-gray-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-orange-200/50 backdrop-blur-sm hover:from-orange-200/80 hover:to-yellow-200/80 hover:border-orange-400/50 hover:text-gray-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Static decorative elements - Hidden on smaller screens */}
            <div className="hidden sm:block absolute top-16 -left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-2xl blur-sm" />
            <div className="hidden sm:block absolute bottom-16 -right-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-500/30 to-orange-400/30 rounded-2xl blur-sm" />
            <div className="hidden lg:block absolute top-1/2 left-8 w-2 h-2 bg-orange-500 rounded-full" />
            <div className="hidden lg:block absolute top-1/3 right-12 w-1 h-1 bg-yellow-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
