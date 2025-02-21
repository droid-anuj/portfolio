// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import AddOnCourses from "../components/AddOnCourses";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="text-black">
      <Navbar />
      <Hero />
      <Bio />
      <Education />
      <Experience />
      <Projects />
      <AddOnCourses />
      <TechStack />
      <Footer />
    </main>
  );
}
