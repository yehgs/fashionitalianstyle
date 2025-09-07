import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, TrendingUp, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const features = [
    { icon: Award, label: 'Premium Quality' },
    { icon: Users, label: 'Expert Team' },
    { icon: TrendingUp, label: 'Market Leaders' },
    { icon: Star, label: '5-Star Service' },
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-400">
              About Fashion Italian Style
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 15 years of expertise in the fashion industry, Fashion
              Italian Style has established itself as a premier clothing
              supplier, specializing in high-quality Italian fashion garments.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We pride ourselves on delivering exceptional fashion solutions to
              retailers, boutiques, and businesses worldwide, maintaining the
              highest standards of quality and service.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${(index + 2) * 150}ms`
                        : '0ms',
                    }}
                  >
                    <IconComponent
                      className="text-blue-400 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl hover:shadow-blue-500/25">
              <div className="bg-slate-900 rounded-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide exceptional Italian fashion garments and clothing
                  solutions that exceed our clients' expectations while
                  maintaining the highest standards of quality and service
                  excellence in the global fashion market.
                </p>
                <div className="mt-6 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    Trusted by 500+ clients
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
