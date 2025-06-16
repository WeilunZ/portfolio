import React from 'react';
import { blogs } from '../data/blogs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

const Blog: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-2 sm:px-6 transition-colors">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Tech Blog ✍️</h1>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {blogs.map((item, idx) => (
          <motion.div
            key={item.slug}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col gap-2"
          >
            <Link to={`/blog/${item.slug}`} className="text-xl font-bold text-indigo-700 dark:text-indigo-300 hover:underline mb-1">
              {item.title}
            </Link>
            <div className="text-xs text-gray-600 dark:text-indigo-200 mb-2">{item.date}</div>
            <div className="text-gray-700 dark:text-white text-sm mb-2">{item.summary}</div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags?.map((tag) => (
                <span key={tag} className="bg-indigo-700/80 text-xs px-2 py-1 rounded font-semibold text-white/90">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
