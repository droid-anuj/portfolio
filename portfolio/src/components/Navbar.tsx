// src/components/Navbar.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Experience", "Projects", "Tech Stack", "Education", "Courses", "Resume"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-md bg-white/90 border-b border-orange-200/30 shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full object-cover border-2 border-orange-300"
              />
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                AY
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={
                      item.toLowerCase() === "resume"
                        ? "/resume" 
                        : `#${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="relative group text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                  >
                    <span>{item}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-600 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-full font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-700 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200/50 hover:from-orange-200 hover:to-yellow-200 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-orange-600" />
              ) : (
                <Menu className="w-6 h-6 text-orange-600" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-orange-50 to-yellow-50 backdrop-blur-xl border-l border-orange-200/50 shadow-2xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-orange-200/30">
                <div className="flex items-center gap-3">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full object-cover border-2 border-orange-300"
                  />
                  <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Anuj Yadav
                  </span>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-orange-100/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5 text-orange-600" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={
                      item.toLowerCase() === "resume"
                        ? "/resume" 
                        : `#${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-orange-200/50 backdrop-blur-sm text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-100/80 hover:to-yellow-100/80 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium"
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full" />
                    <span>{item}</span>
                  </motion.a>
                ))}

                {/* Mobile Contact Button */}
                <motion.a
                  href="#contact"
                  className="flex items-center justify-center gap-2 mt-6 p-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-xl font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-700 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get in Touch</span>
                </motion.a>
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center p-4 bg-white/60 rounded-xl border border-orange-200/50 backdrop-blur-sm">
                  <p className="text-sm text-gray-600 mb-2">Ready to collaborate?</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-orange-600 font-medium">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
