import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/', sectionId: 'home-section' },
  { name: 'Skills', to: '/', sectionId: 'skills-section' },
  { name: 'Experience', to: '/', sectionId: 'experience-section' },
  { name: 'Projects', to: '/', sectionId: 'projects-section' },
  { name: 'Blog', to: '/', sectionId: 'blog-section' },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Dark mode logic
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    // Scroll handling for active section highlighting only on the home page
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = navLinks.map(link => document.getElementById(link.sectionId));
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle scrolling to section when navigating from another page or clicking on home page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // Clear the state after scrolling to prevent re-scrolling on refresh
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.theme = newMode ? 'dark' : 'light';
      return newMode;
    });
  };

  const handleNavLinkClick = (e: React.MouseEvent, link: { name: string, to: string, sectionId: string }) => {
    if (location.pathname === '/') {
      // If already on the home page, just scroll
      e.preventDefault(); // Prevent default Link navigation
      const element = document.getElementById(link.sectionId);
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home and pass state for scrolling
      // Link's default behavior will handle navigation, we just add state
      // The useEffect above will handle the scroll once on the home page
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
          Weilun Zhou 👋
        </div>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              state={{ scrollToSection: link.sectionId }} // Pass sectionId as state
              onClick={(e) => handleNavLinkClick(e, link)}
              className={`px-2 py-1 rounded transition-colors font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 ${
                location.pathname === link.to && activeSection === link.sectionId
                  ? 'underline underline-offset-4 text-indigo-600 dark:text-indigo-400'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} /></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
