import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

const Projects: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-2 sm:px-6 transition-colors">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Projects 🛠️</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4"
          >
            <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.title}</h2>
            <p className="text-gray-700 dark:text-white text-sm mb-2 flex-1">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {item.techStacks.map((tech) => (
                <span key={tech} className="bg-gray-200 text-xs px-2 py-1 rounded font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap mt-auto">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-xs font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;