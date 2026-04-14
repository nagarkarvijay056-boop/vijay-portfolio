import React from 'react';
import { Camera, Book, Gamepad2, Brain, Coffee, Mountain } from 'lucide-react';

// ✅ IMPORT YOUR PHOTOS
import photo1 from '../assets/photography/photo1.jpeg';
import photo2 from '../assets/photography/photo2.jpeg';
import photo3 from '../assets/photography/photo3.jpeg';
import photo4 from '../assets/photography/photo4.jpeg';

const Interests = () => {
  const interests = [
    {
      icon: Camera,
      title: 'Nature Photography',
      description: 'Capturing the beauty of nature through lens',
    },
    {
      icon: Book,
      title: 'Story Writing',
      description: 'Crafting narratives and creative tales',
    },
    {
      icon: Gamepad2,
      title: 'Anime & Manga',
      description: 'Exploring Japanese animation and comics',
    },
    {
      icon: Brain,
      title: 'Chess',
      description: 'Strategic thinking and problem solving',
    },
    {
      icon: Coffee,
      title: 'Building Things',
      description: 'Creating apps, games, and solutions',
    },
    {
      icon: Mountain,
      title: 'Learning',
      description: 'Always exploring new technologies',
    },
  ];

  // ✅ PHOTO ARRAY (clean approach)
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <section id="interests" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interests & Hobbies
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            When I'm not coding, you'll find me doing these
          </p>
        </div>

        {/* 🔹 INTEREST CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
              </div>
            );
          })}
        </div>

        {/* 🔥 REAL PHOTO SECTION */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Nature Photography
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={photo}
                  alt={`Nature ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;