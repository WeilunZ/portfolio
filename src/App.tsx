import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import ScrollToTopButton from './components/ScrollToTopButton';

// Placeholder components for each page
// const Home = () => <div className="pt-20 max-w-3xl mx-auto p-4">Home / Self Intro Section</div>;
// const Education = () => <div className="pt-20 max-w-3xl mx-auto p-4">Education Section</div>;
// const Experience = () => <div className="pt-20 max-w-3xl mx-auto p-4">Experience Section</div>;
// const Projects = () => <div className="pt-20 max-w-3xl mx-auto p-4">Projects Section</div>;
// const Blog = () => <div className="pt-20 max-w-3xl mx-auto p-4">Blog Section</div>;

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
