import React, { useState } from 'react';
import { experience } from '../data/experience';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';

const cardVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" as const } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
};
  
const listItemVariants: Variants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { scale: 1.05, opacity: 1, boxShadow: '0 4px 24px 0 rgba(99,102,241,0.10), 0 1.5px 6px 0 rgba(99,102,241,0.10)', transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
};

const Experience: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = experience[selectedIdx];

  return (
    <section className="min-h-screen pt-24 pb-12 px-2 sm:px-6 bg-pink-50 dark:bg-gray-950 transition-colors relative overflow-hidden">
      {/* Subtle animated background blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-30 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <h1 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Professional Experience</h1>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left: Detailed Card */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 min-h-[400px] flex flex-col transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {selected.logo ? (
                  <img src={selected.logo} alt={selected.company} className="w-10 h-10 rounded-full object-contain bg-white border" />
                ) : selected.emoji ? (
                  <span className="text-3xl align-middle">{selected.emoji}</span>
                ) : null}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selected.company}</h2>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium mb-2 text-gray-900 dark:text-white">
                <FaUserTie color="#818cf8" size={22} />
                {selected.role}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-indigo-200 text-sm mb-6">
                <FaMapMarkerAlt color="#818cf8" size={18} />
                {selected.location} · {selected.startDate} – {selected.endDate}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white">
                {selected.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Right: List of Jobs */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-2">
          {experience.map((item, idx) => (
            <motion.button
              key={item.company + item.role}
              onClick={() => setSelectedIdx(idx)}
              className={`text-left rounded-xl px-4 py-3 border transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/50 flex items-center gap-3
                ${
                  idx === selectedIdx
                    ? 'bg-white dark:bg-gray-900 border-indigo-300 dark:border-indigo-700 shadow-lg scale-[1.03]'
                    : 'bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 opacity-80 hover:opacity-100'
                }
              `}
              style={{ transition: 'all 0.2s' }}
              variants={listItemVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.04, opacity: 1 }}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.company} className="w-7 h-7 rounded-full object-contain bg-white border" />
              ) : item.emoji ? (
                <span className="text-xl align-middle">{item.emoji}</span>
              ) : null}
              <div className="flex-1">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.startDate} – {item.endDate}</div>
                <div className={`font-semibold ${idx === selectedIdx ? 'text-indigo-700 dark:text-indigo-400' : 'text-gray-900 dark:text-gray-200'}`}>{item.company}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{item.role}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
