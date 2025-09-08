import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import brand1 from '../assets/brands/aprium.png';
import brand2 from '../assets/brands/cavalli.png';
import brand3 from '../assets/brands/avx.png';
import brand4 from '../assets/brands/grand.png';
import brand5 from '../assets/brands/replay.png';
import brand6 from '../assets/brands/karl.png';
import brand7 from '../assets/brands/iceberg.png';
import brand8 from '../assets/brands/cerruti.png';
import brand9 from '../assets/brands/guadi.png';
import brand10 from '../assets/brands/bikkemergs.png';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const brandPartners = [
    { image: brand1, alt: 'Aprium' },
    { image: brand2, alt: 'Cavalli' },
    { image: brand3, alt: 'AVX' },
    { image: brand4, alt: 'Grand' },
    { image: brand5, alt: 'Replay' },
    { image: brand6, alt: 'Karl' },
    { image: brand7, alt: 'Iceberg' },
    { image: brand8, alt: 'Cerruti' },
    { image: brand9, alt: 'Guadi' },
    { image: brand10, alt: 'Bikkemergs' },
  ];

  // Hero background images
  const heroImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&crop=center&q=80',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop&crop=center&q=80',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop&crop=center&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop&crop=center&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1920&h=1080&fit=crop&crop=center&q=80',
    'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1920&h=1080&fit=crop&crop=center&q=80',
  ];

  useEffect(() => {
    // Image rotation for hero background
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    // Hero content animation
    const animateHeroContent = () => {
      const heroElements = heroRef.current?.children;
      if (heroElements) {
        Array.from(heroElements).forEach((el, index) => {
          el.style.transform = 'translateY(50px)';
          el.style.opacity = '0';
          setTimeout(() => {
            el.style.transition = 'all 0.8s ease-out';
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
          }, index * 200 + 1000);
        });
      }
    };

    animateHeroContent();
    setIsVisible(true);

    return () => {
      clearInterval(imageInterval);
    };
  }, [heroImages.length]);

  const duplicatedBrands = [...brandPartners, ...brandPartners];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform:
                index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 2s ease-in-out, transform 20s ease-in-out',
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div ref={heroRef} className="container mx-auto px-4 text-center">
          {/* Uncomment if you want the main title */}
          {/* <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Fashion Italian Style
          </h1> */}
          <p className="text-2xl md:text-3xl mb-6 text-white drop-shadow-lg font-light">
            Premium Clothing Supply & Fashion Solutions
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-4xl mx-auto drop-shadow-md font-light leading-relaxed">
            Leading supplier of premium Italian fashion garments, specializing
            in wholesale clothing solutions for retailers and businesses
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#services"
              className="bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30"
            >
              Discover Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white/70 hover:bg-white hover:text-slate-900 backdrop-blur-sm px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              Get In Touch
            </a>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center mt-16 space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125 shadow-lg shadow-white/50'
                    : 'bg-white/40 hover:bg-white/70 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Brand Partners Section */}
      <div className="relative z-20 pb-8">
        {/* Brand Title */}
        {/* <div className="text-center mb-6">
          <p className="text-white/80 text-sm font-light uppercase tracking-wider">
            Trusted by Leading Brands
          </p>
        </div> */}

        {/* Brand Carousel */}
        <div className="relative overflow-hidden w-[90%] md:w-[80%] mx-auto">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-6 hover:pause-animation">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.alt}-${index}`}
                  className={`flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-32 h-20 flex items-center justify-center transform hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/10 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index % 10) * 100}ms`
                      : '0ms',
                  }}
                >
                  <img
                    src={brand.image}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="flex flex-col items-center space-x-2">
          <span className="text-white/80 text-sm font-light">
            Scroll to explore
          </span>
          <ChevronDown size={32} className="text-white/80" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Custom Styles for Carousel Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\\:pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
