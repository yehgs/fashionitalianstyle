import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
