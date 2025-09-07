import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>
        Fashion Italian Style - Premium Clothing Supply & Fashion Solutions
      </title>
      <meta
        name="description"
        content="Leading fashion clothing supplier specializing in premium Italian style garments. Contact us for wholesale fashion solutions and premium clothing supply services."
      />
      <meta
        name="keywords"
        content="fashion clothing, Italian style, wholesale fashion, clothing supplier, premium garments, fashion solutions"
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/10 backdrop-blur-md border-b border-slate-700/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-400' : 'text-white drop-shadow-lg'
            }`}
          >
            Fashion Italian Style
          </div> */}
          <img src={logo} alt="logo" className="size-24" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 hover:text-blue-400 relative group ${
                  isScrolled ? 'text-white' : 'text-white/90 drop-shadow-md'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white drop-shadow-lg'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
