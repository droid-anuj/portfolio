"use client";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const constraintsRef = useRef(null);
  const technologies = ["Django", "Next.js", "React", "Angular" ,"Node.js"];

  return (
    <section 
      className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-orange-50 to-yellow-50 px-6 overflow-hidden"
      ref={constraintsRef}
    >
      {/* Static background elements */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl -top-48 -left-48" />
      <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl -bottom-48 -right-48" />

      {/* Main content - Side by side layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
        
        {/* Profile Image - Left side */}
        <div className="relative z-10 flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full object-cover border-4 border-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-shadow duration-300"
          />
        </div>

        {/* Text Content - Right side */}
        <div className="flex-1 text-left lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-xl sm:text-3xl md:text-4xl block text-gray-600">
                Hello, I&apos;m
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                Anuj Yadav
              </span>
            </h1>

            <div className="text-xl md:text-2xl mb-8 font-mono text-gray-700">
              <span className="mr-2 text-orange-600">&gt;_</span>
              <span className="border-r-2 border-orange-500 pr-1">
                Full stack Developer  | Backend Developer
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 border border-orange-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/anuj-yadav-194aa81bb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 p-3 rounded-full bg-white/80 hover:bg-blue-600 hover:text-white border border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v16H.22V8zM8.22 8h4.38v2.16h.06c.61-1.16 2.12-2.38 4.36-2.38 4.66 0 5.52 3.06 5.52 7.04V24H18.7v-7.52c0-1.8-.03-4.12-2.52-4.12-2.52 0-2.9 1.96-2.9 3.98V24H8.22V8z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/droid-anuj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 p-3 rounded-full bg-white/80 hover:bg-gray-800 hover:text-white border border-gray-400 hover:shadow-lg hover:shadow-gray-500/20 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.756 8.207 11.344.6.11.793-.26.793-.577v-2.03c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.084 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.958-.267 1.986-.4 3.005-.405 1.02.005 2.048.138 3.008.405 2.288-1.552 3.294-1.23 3.294-1.23.655 1.653.244 2.874.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.192.694.8.576C20.565 22.253 24 17.776 24 12.5 24 5.87 18.63.5 12 .5z"/>
                </svg>
              </a>

              {/* Resume Download */}
              <a 
                href="/resume.pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg border border-orange-500 hover:from-orange-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Static decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-400/30 rounded-full blur-lg" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-500/30 rounded-full blur-lg" />
    </section>
  );
};

export default Hero;