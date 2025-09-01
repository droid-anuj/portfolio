// src/components/AddOnCourses.tsx
"use client";
import { motion } from "framer-motion";
import { Bookmark, GraduationCap, Award, BookOpen } from "lucide-react";

const AddOnCourses = () => {
  const courses = [
    {
      title: "React - The Complete Guide",
      institution: "Udemy",
      description:
        "Comprehensive course covering React fundamentals, hooks, React Router, and Redux.",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ["Hooks", "React Router", "Redux", "Component Design"],
      category: "Frontend Development"
    },
    {
      title: "The Complete Web Development Course", 
      institution: "Udemy",
      description:
        "Full-stack web development course covering HTML, CSS, JavaScript, and backend technologies.",
      icon: <Bookmark className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Backend"],
      category: "Full-Stack Development"
    },
    {
      title: "Complete AI & Machine Learning Bootcamp",
      institution: "Udemy", 
      description:
        "Covers Data Science, Machine Learning, AI concepts, and Python with TensorFlow and Pandas.",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      skills: ["Machine Learning", "Data Science", "TensorFlow", "Python"],
      category: "AI & Data Science"
    }
  ];

  return (
    <section 
      id="courses" 
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50"
    >
      {/* Background gradient orbs - Responsive sizing */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-orange-400/20 via-yellow-500/20 to-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 rounded-full blur-3xl" />

      {/* Grid pattern overlay - Smaller on mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:45px_45px] lg:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
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
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                <span className="text-base sm:text-lg font-medium text-orange-700">Professional Learning</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Courses & Certifications
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Continuous learning through industry-recognized courses and certifications
              </p>
            </motion.div>

            {/* Courses Grid - Mobile-first responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative h-full"
                >
                  {/* Card background with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-yellow-100/50 rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                  
                  <div className="relative h-full p-6 sm:p-8 bg-white/60 rounded-xl sm:rounded-2xl border border-orange-200/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 flex flex-col">
                    {/* Header with icon and category */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg sm:rounded-xl shadow-lg flex-shrink-0">
                          {course.icon}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-orange-700 bg-orange-100/80 px-2 sm:px-3 py-1 rounded-full">
                          {course.category}
                        </span>
                      </div>
                    </div>

                    {/* Course content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {course.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                        <p className="text-orange-700 font-semibold text-sm sm:text-base">
                          {course.institution}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                        {course.description}
                      </p>
                      
                      {/* Skills grid - Mobile optimized */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                        {course.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-2 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 text-gray-700 rounded-lg text-xs sm:text-sm font-medium border border-orange-200/50 backdrop-blur-sm hover:from-orange-200/80 hover:to-yellow-200/80 hover:border-orange-400/50 hover:text-gray-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer text-center"
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements - Hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute top-16 -right-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-2xl blur-sm" />
            <div className="hidden sm:block absolute bottom-16 -left-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-500/30 to-orange-400/30 rounded-2xl blur-sm" />
            
            {/* Floating animated elements - Hidden on mobile */}
            <motion.div
              className="hidden lg:block absolute top-1/4 right-8 w-3 h-3 bg-orange-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="hidden lg:block absolute bottom-1/3 left-12 w-2 h-2 bg-yellow-600 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddOnCourses;
