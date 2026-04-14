import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

const Portfolio = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
