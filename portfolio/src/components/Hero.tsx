"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const constraintsRef = useRef(null);
  const technologies = ["Django", "Next.js", "React", "Angular" ,"Node.js"];

  return (
    <section 
      className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-primary to-secondary px-6 overflow-hidden"
      ref={constraintsRef}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-highlight/20 rounded-full blur-3xl -top-48 -left-48"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-warning/20 rounded-full blur-3xl -bottom-48 -right-48"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-6"
            initial={{ letterSpacing: "-0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0em", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-textPrimary bg-clip-text">
              Anuj Yadav
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-3xl mb-8 font-mono text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="mr-2">&gt;_</span>
            <motion.span
              className="border-r-2 border-highlight pr-1"
              animate={{ borderColor: ["transparent", "#ffd700", "transparent"] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              Software Developer
            </motion.span>
          </motion.div>

          <motion.div className="flex justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 border border-highlight/30 hover:border-highlight cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.a 
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-textPrimary text-highlight text-lg font-semibold rounded-lg shadow-lg border-2 border-highlight hover:border-red-500  transition-all duration-300 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm">Scroll down</span>
          <motion.div
            className="w-6 h-10 rounded-3xl border-2 border-highlight flex justify-center p-1"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-2 h-2 bg-highlight rounded-full" />
          </motion.div>
        </motion.div> */}
      </div>

      {/* Floating elements that can be dragged */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-warning/30 rounded-full blur-lg"
        drag
        dragConstraints={constraintsRef}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-highlight/30 rounded-full blur-lg"
        drag
        dragConstraints={constraintsRef}
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;