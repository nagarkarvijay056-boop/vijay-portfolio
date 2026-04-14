import React from 'react';
import { Mail, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nagarkarvijay056@gmail.com',
      link: 'mailto:nagarkarvijay056@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'scfu125107@motvpu.ac.in',
      link: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Vj0803',
      link: 'https://github.com/Vj0803',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@vijay_nagarkar_0803',
      link: 'https://instagram.com/vijay_nagarkar_0803',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities to collaborate.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors">
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">{contact.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{contact.value}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in my work or want to collaborate? Drop a message on any platform above!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
