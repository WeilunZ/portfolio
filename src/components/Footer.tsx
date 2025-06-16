import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-6 mt-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
      <span>© {new Date().getFullYear()} Weilun Zhou</span>
      <span className="hidden sm:inline">|</span>
      <a href="mailto:elvis.zhou0711@gmail.com" className="hover:underline text-indigo-600 dark:text-indigo-300">elvis.zhou0711@gmail.com</a>
      <span className="hidden sm:inline">|</span>
      <a href="https://linkedin.com/in/weilun-zhou-51b826115" target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600 dark:text-indigo-300">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
