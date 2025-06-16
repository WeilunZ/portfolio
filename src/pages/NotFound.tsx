import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 dark:bg-gray-950 px-4">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Go Home</Link>
  </section>
);

export default NotFound; 