import React, { useEffect } from 'react';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';

const sectionBackgrounds = [
  "bg-white dark:bg-black", // Primary light background, black for dark mode
  "bg-gray-50 dark:bg-black", // Slightly off-white for alternating, black for dark mode
];

const MainSections: React.FC = () => {
  useEffect(() => {
    // This effect is for demonstration purposes, actual scroll logic will be in Navbar
    // You can add global scroll behavior here if needed, but per-section scroll is handled by Navbar
  }, []);

  return (
    <>
      <section id="home-section" className={`py-20 ${sectionBackgrounds[0]}`}>
        <Home />
      </section>
      <section id="skills-section" className="py-20">
        <Skills />
      </section>
      <section id="experience-section" className={`py-20 ${sectionBackgrounds[1]}`}>
        <Experience />
      </section>
      <section id="projects-section" className={`py-20 ${sectionBackgrounds[0]}`}>
        <Projects />
      </section>
      <section id="blog-section" className={`py-20 ${sectionBackgrounds[1]}`}>
        <Blog />
      </section>
    </>
  );
};

export default MainSections; 