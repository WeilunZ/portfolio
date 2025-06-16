import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } },
};

const markdownComponents = {
  h1: (props: any) => <h1 className="text-2xl font-bold mt-6 mb-2" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-300" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-semibold mt-4 mb-2 text-indigo-200" {...props} />,
  p: (props: any) => <p className="mb-3 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-3" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  code: (props: any) => <code className="bg-gray-800 text-pink-200 px-1 py-0.5 rounded text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-gray-800 text-pink-200 rounded p-3 mb-3 overflow-x-auto" {...props} />,
  a: (props: any) => <a className="text-indigo-300 underline" {...props} />,
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen pt-24 pb-12 px-2 sm:px-6 bg-pink-50 dark:bg-gray-950 transition-colors flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">404 - Blog Post Not Found</div>
        <Link to="/blog" className="text-indigo-500 hover:underline">Back to Blog</Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-2 sm:px-6 bg-pink-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col gap-4"
        >
          <Link to="/blog" className="text-indigo-400 hover:underline text-xs mb-2">← Back to Blog</Link>
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h1>
          <div className="flex flex-wrap gap-3 items-center text-xs text-gray-600 dark:text-indigo-200 mb-2">
            <span>{post.date}</span>
            {post.tags?.map((tag) => (
              <span key={tag} className="bg-indigo-700/80 text-xs px-2 py-1 rounded font-semibold text-white/90">{tag}</span>
            ))}
          </div>
          <div className="prose dark:prose-invert max-w-none text-gray-900 dark:text-white">
            <ReactMarkdown
              components={markdownComponents}
            >
              {post.content || post.summary}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
