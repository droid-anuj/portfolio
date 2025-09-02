"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Anuj.compile@gmail.com");
    setCopied(true);

    // Hide message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50"
    >
      {/* Background gradient orbs - adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-orange-400/20 via-yellow-500/20 to-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative backdrop-blur-xl bg-white/80 rounded-2xl sm:rounded-3xl border border-orange-200/50 shadow-2xl shadow-orange-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Border accent */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-orange-300/30" />
          
          <div className="relative p-6 sm:p-10 lg:p-16">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                <span className="text-base sm:text-lg font-medium text-orange-700">Let&apos;s Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Contact Information - Mobile-first layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
              >
                {/* Direct Contact */}
                <div className="relative p-6 sm:p-8 bg-white/60 rounded-xl sm:rounded-2xl border border-orange-200/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                      Direct Contact
                    </h3>
                  </div>
                  
                  <div className="space-y-4 relative">
                    <motion.button
                      onClick={handleCopy}
                      className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 rounded-xl border border-orange-200/50 hover:from-orange-200/80 hover:to-yellow-200/80 hover:border-orange-400/50 transition-all duration-300 group cursor-pointer w-full"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 group-hover:text-orange-700 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium truncate">
                        Anuj.compile@gmail.com
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        <div className="px-2 py-1 bg-orange-500 text-white text-xs rounded-md whitespace-nowrap">
                          Click to copy
                        </div>
                      </div>
                    </motion.button>

                    {/* Success message - Mobile optimized */}
                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 top-full mt-2 bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium border border-green-200"
                        >
                          Email copied!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Social Links */}
                <div className="relative p-6 sm:p-8 bg-white/60 rounded-xl sm:rounded-2xl border border-orange-200/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                      Social Links
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.a
                      href="https://www.linkedin.com/in/anuj-yadav-194aa81bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 rounded-xl border border-orange-200/50 hover:from-orange-200/80 hover:to-yellow-200/80 hover:border-orange-400/50 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 group-hover:text-orange-700 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium">
                        LinkedIn Profile
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com/droid-anuj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 rounded-xl border border-orange-200/50 hover:from-orange-200/80 hover:to-yellow-200/80 hover:border-orange-400/50 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 group-hover:text-orange-700 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium">
                        GitHub Repository
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Response Promise - Mobile optimized */}
              <motion.div
                className="relative p-6 sm:p-8 bg-gradient-to-r from-orange-100/50 to-yellow-100/50 rounded-xl sm:rounded-2xl border border-orange-200/60 backdrop-blur-sm max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    I typically respond within <span className="text-orange-600 font-semibold">24 hours</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements - Hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute top-16 -left-8 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-2xl blur-sm" />
            <div className="hidden sm:block absolute bottom-16 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-orange-400/30 rounded-2xl blur-sm" />
            <div className="hidden lg:block absolute top-1/2 right-8 w-2 h-2 bg-orange-500 rounded-full" />
            <div className="hidden lg:block absolute top-1/3 left-12 w-1 h-1 bg-yellow-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
