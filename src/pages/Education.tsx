import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

const Education: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-2 sm:px-6 bg-pink-50 dark:bg-gray-950 transition-colors">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Education</h1>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {education.map((item, idx) => (
          <motion.div
            key={item.school}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col sm:flex-row items-center gap-6"
          >
            {item.logo && (
              <img src={item.logo} alt={item.school} className="w-16 h-16 rounded-full object-contain bg-white border" />
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <FaGraduationCap color="#818cf8" size={22} />
                {item.school}
              </h2>
              <div className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{item.degree}</div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-indigo-200 text-sm mb-2">
                <FaMapMarkerAlt color="#818cf8" size={16} />
                {item.location}
              </div>
              <div className="text-sm text-gray-600 dark:text-indigo-200 mb-2">{item.startDate} – {item.endDate}</div>
              {item.achievements && item.achievements.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-white/90">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
