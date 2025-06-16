import React, { useEffect } from 'react';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';

const sectionBackgrounds = [
  "bg-white dark:bg-gray-900", // Primary light background, very dark gray for dark mode
  "bg-gray-50 dark:bg-gray-950", // Slightly off-white for alternating, even darker gray for dark mode
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