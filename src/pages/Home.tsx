import React from 'react';
import profileImg from '../assets/selfie.jpg';

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/WeilunZ',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/weilun-zhou-51b826115/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:elvis.zhou0711@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z" /></svg>
    ),
  },
];

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-24 text-center px-4 max-w-2xl mx-auto pb-0">
      <img
        src={profileImg}
        alt="Weilun Zhou profile"
        className="w-32 h-32 rounded-full mb-8 border border-gray-200 dark:border-gray-700 object-cover"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight leading-tight">
        Weilun Zhou
      </h1>
      <h2 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
        Senior Software Engineer
      </h2>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">Shanghai, China 📍</div>
      <p className="max-w-xl text-md text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        Passionate about building scalable backend systems, observability platforms, and mentoring engineers. Experienced in Java, Golang, Spring, Kubernetes, and more. Always eager to learn and solve challenging problems. 💡
      </p>
      {/* <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Weilun Zhou ✨</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Senior Software Engineer 🚀</h2>
      <div className="text-gray-600 dark:text-gray-300 mb-4">Shanghai, China 📍</div>
      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-200 mb-6">
        Passionate about building scalable backend systems, observability platforms, and mentoring engineers. Experienced in Java, Golang, Spring, Kubernetes, and more. Always eager to learn and solve challenging problems. 💡 */}

      <div className="flex gap-4 justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;