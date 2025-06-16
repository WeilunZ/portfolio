import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/skills';

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

const gradientColors = [
  "from-blue-500 to-indigo-600",
  "from-green-500 to-teal-600",
  "from-purple-500 to-pink-600",
  "from-red-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-yellow-500 to-orange-500",
];

const Skills: React.FC = () => {
  return (
    <section className="pt-0 pb-12 px-2 sm:px-6 bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">My Skills ✨</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((category, categoryIdx) => (
          <motion.div
            key={category.category}
            variants={categoryVariants}
            initial="hidden"
            animate="visible"
            className={`rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center text-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
          >
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 w-full flex items-center justify-center gap-2">
              <span className="text-3xl leading-none">{category.emoji}</span> {category.category}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full font-medium text-sm text-gray-700 dark:text-gray-300"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 