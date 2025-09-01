// src/components/Footer.tsx
"use client";
import { Github, Linkedin,  Code, Heart, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/droid-anuj",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/anuj-yadav-194aa81bb/",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/20 via-yellow-500/20 to-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl border border-orange-200/50 shadow-2xl shadow-orange-500/10">
          {/* Border accent */}
          <div className="absolute inset-0 rounded-3xl border border-orange-300/30" />
          
          <div className="relative p-16">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
              
              {/* Brand & Description */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Anuj Yadav
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Passionate Full-Stack Developer crafting digital experiences that make a difference. 
                  Always learning, always building.
                </p>

                <div className="flex items-center gap-2 text-gray-700">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span>and lots of</span>
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  Quick Navigation
                </h4>
                
                <nav className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:text-gray-900 bg-gradient-to-r from-orange-100/50 to-yellow-100/50 rounded-xl border border-orange-200/30 hover:from-orange-200/50 hover:to-yellow-200/50 hover:border-orange-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social Links & Contact */}
              <div className="lg:col-span-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Let&apos;s Connect
                </h4>
                
                <p className="text-gray-600 mb-8">
                  Ready to collaborate? Feel free to reach out through any of these platforms
                </p>

                <div className="space-y-4 mb-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/60 rounded-xl border border-orange-200/50 backdrop-blur-sm hover:bg-white/80 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="p-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg group-hover:from-orange-200 group-hover:to-yellow-200 transition-all duration-300">
                        {link.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <ArrowUp className="w-5 h-5" />
                  Back to Top
                </button>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-orange-200/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 text-gray-600">
                  <p>© {new Date().getFullYear()} Anuj Yadav. All rights reserved.</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Built with Next.js & Tailwind CSS</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span>Always improving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-16 -right-8 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-2xl blur-sm" />
            <div className="absolute bottom-16 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-orange-400/30 rounded-2xl blur-sm" />
            <div className="absolute top-1/4 left-8 w-3 h-3 bg-orange-500 rounded-full" />
            <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-yellow-600 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
