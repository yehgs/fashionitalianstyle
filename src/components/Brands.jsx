import React, { useEffect, useRef, useState } from 'react';
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

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);
  const brandsRef = useRef(null);

  // Brand partners with imported images
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (brandsRef.current) {
      observer.observe(brandsRef.current);
    }

    return () => {
      if (brandsRef.current) {
        observer.unobserve(brandsRef.current);
      }
    };
  }, []);

  // Create duplicated array for seamless loop
  const duplicatedBrands = [...brandPartners, ...brandPartners];

  return (
    <section
      id="brands"
      ref={brandsRef}
      className="py-20 bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Our Brand Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by the world's leading fashion brands and retailers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Brands Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-8 hover:pause-animation">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.alt}-${index}`}
                  className={`flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 w-64 h-32 flex items-center justify-center transform hover:scale-110 hover:bg-gradient-to-br hover:from-blue-900 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 border border-slate-600/50 ${
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
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Partnership Stats */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300 text-lg">Brand Partners</div>
            <div className="text-sm text-gray-500 mt-2">
              Worldwide Collaboration
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300 text-lg">Years Partnership</div>
            <div className="text-sm text-gray-500 mt-2">
              Long-term Relationships
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300 text-lg">Authentic Products</div>
            <div className="text-sm text-gray-500 mt-2">Guaranteed Quality</div>
          </div>
        </div>
      </div>

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
          animation: scroll 40s linear infinite;
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

export default Brands;
