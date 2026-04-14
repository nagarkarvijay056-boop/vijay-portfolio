import profile from '../assets/profile.jpeg';
import React from 'react';
import { Code, Palette, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'Design Thinking', category: 'Creative' },
    { name: 'AI/ML', category: 'Technology' },
    { name: 'Problem Solving', category: 'Core' },
    { name: 'System Design', category: 'Technology' },
    { name: 'Game Development', category: 'Learning' },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'MIT Vishwaprayaga University',
      year: '2024 - 2028',
      current: true,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo & Quick Intro */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden">
              {/* Photo placeholder */}
              { <img  src={profile} alt="Vijay Nagarkar" className="w-full h-full object-contain rounded-2xl"/>}
              <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-sm">Your Photo Here</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-gray-700 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Goal</h3>
                  <p className="text-gray-600 dark:text-gray-400">Become a Game Developer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-gray-700 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn by doing, build fast, iterate faster
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story & Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a first-year CSE student with an impatient creator's mindset. I don't just want
                  to learn theory—I want to build things that matter and see them come to life.
                </p>
                <p>
                  Whether it's developing AI systems to solve campus problems, creating games to spread
                  environmental awareness, or capturing nature through photography, I'm always working
                  on something that blends technology with impact.
                </p>
                <p>
                  My journey is driven by curiosity and a builder's energy. I learn best by breaking
                  things, fixing them, and making them better. Currently focused on AI/ML while working
                  toward my ultimate goal of game development.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-gray-900 dark:border-white pl-4 py-2"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.year}</p>
                  {edu.current && (
                    <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
