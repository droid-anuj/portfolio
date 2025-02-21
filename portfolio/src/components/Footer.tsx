// src/components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-highlight/20 rounded-full blur-3xl"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-warning to-highlight bg-clip-text text-transparent">
                  Let&apos;s Connect
                </span>
              </motion.h3>
              <p className="text-textSecondary mb-6">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-white rounded-xl hover:bg-grey transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <h4 className="text-xl font-bold text-highlight mb-4">
                  Quick Links
                </h4>
                <nav className="flex flex-col space-y-2">
                  {["Home", "Projects", "Tech Stack", "Courses"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-textSecondary hover:text-highlight transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10 text-center text-textSecondary"
          >
            <p>© {new Date().getFullYear()} Anuj Yadav. All rights reserved.</p>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-8 right-12 w-24 h-24 bg-highlight/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 left-12 w-16 h-16 bg-warning/20 rounded-full blur-xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
