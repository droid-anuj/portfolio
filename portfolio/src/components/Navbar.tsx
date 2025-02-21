// src/components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Tech Stack", "Experience", "Projects", "Courses", "Education"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled 
          ? "backdrop-blur-md bg-white/10 border-b border-primary-300/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-2xl font-bold flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 16L20 20L28 16"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 20V28"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="5"
                  y1="5"
                  x2="35"
                  y2="35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="text-textPrimary" stopColor="currentColor" />
                  <stop offset="1" className="text-textPrimary" stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-textPrimary bg-clip-text ">
              AY
            </span>
          </motion.a>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="relative group text-gray-300 hover:text-white transition-colors"
                >
                  <span className="font-semibold">{item}</span>
                  <motion.span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-2 bg-highlight text-white rounded-full font-semibold shadow-lg hover:bg-warning transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;