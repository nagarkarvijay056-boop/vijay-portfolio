import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Student. Builder. Future Game Developer.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      {/* Background image placeholder */}
      {/* <div className="absolute inset-0 z-0">
        <img 
          src="YOUR_NATURE_PHOTO_URL" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Vijay Nagarkar
          </h1>
          <div className="h-8 md:h-10">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-mono">
              {text}
              <span className={`inline-block w-0.5 h-6 bg-gray-900 dark:bg-white ml-1 ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          First-year B.Tech CSE student at MIT Vishwaprayaga University, passionate about building
          AI-powered solutions with social impact. Aspiring game developer who loves creating,
          exploring, and solving real-world problems through technology.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
