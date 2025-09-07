import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  Users,
  Award,
  ShoppingBag,
  Truck,
  Shield,
  ArrowRight,
  Star,
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Wholesale Fashion Supply',
      description:
        'Premium wholesale clothing solutions for retailers and businesses looking to stock high-quality Italian fashion garments. We offer competitive pricing and bulk ordering options.',
      icon: <ShoppingBag size={48} />,
      image:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop&crop=center',
      features: [
        'Bulk Ordering',
        'Competitive Pricing',
        'Quality Assurance',
        'Fast Delivery',
      ],
      color: 'from-blue-800 to-blue-600',
    },
    {
      id: 2,
      title: 'Custom Fashion Solutions',
      description:
        'Tailored clothing supply solutions designed to meet your specific business needs and requirements. From concept to delivery, we handle everything.',
      icon: <Users size={48} />,
      image:
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop&crop=center',
      features: [
        'Custom Design',
        'Personal Consultation',
        'Flexible Orders',
        'Brand Partnership',
      ],
      color: 'from-blue-800 to-blue-600',
    },
    {
      id: 3,
      title: 'Quality Assurance & Control',
      description:
        'Rigorous quality control processes ensuring every garment meets our exceptional standards before delivery. Your reputation is our priority.',
      icon: <Award size={48} />,
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop&crop=center',
      features: [
        'Quality Testing',
        'Material Verification',
        'Compliance Check',
        'Satisfaction Guarantee',
      ],
      color: 'from-blue-800 to-blue-600',
    },
    {
      id: 4,
      title: 'Global Logistics & Delivery',
      description:
        'Efficient worldwide shipping and logistics solutions. We ensure your orders reach you safely and on time, anywhere in the world.',
      icon: <Truck size={48} />,
      image:
        'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop&crop=center',
      features: [
        'Worldwide Shipping',
        'Express Delivery',
        'Tracking System',
        'Insurance Coverage',
      ],
      color: 'from-blue-800 to-blue-600',
    },
    {
      id: 5,
      title: 'Fashion Trend Consulting',
      description:
        'Stay ahead of fashion trends with our expert consulting services. We help you choose the right products for your market and season.',
      icon: <TrendingUp size={48} />,
      image:
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop&crop=center',
      features: [
        'Trend Analysis',
        'Market Research',
        'Style Guidance',
        'Seasonal Planning',
      ],
      color: 'from-blue-800 to-blue-600',
    },
    {
      id: 6,
      title: 'Brand Protection & Authenticity',
      description:
        'Complete brand protection services ensuring authenticity and quality. We guarantee genuine products and protect your brand reputation.',
      icon: <Shield size={48} />,
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
      features: [
        'Authenticity Guarantee',
        'Brand Protection',
        'Anti-Counterfeiting',
        'Certificate of Origin',
      ],
      color: 'from-blue-800 to-blue-600',
    },
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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    // Auto-rotate services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      clearInterval(interval);
    };
  }, [services.length]);

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-20 bg-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fashion solutions tailored to elevate your business to
            new heights
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                transform: activeService === index ? 'scale(1.05)' : 'scale(1)',
              }}
              onClick={() => handleServiceClick(index)}
            >
              <div
                className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  activeService === index
                    ? 'ring-4 ring-blue-500 shadow-blue-500/25'
                    : 'hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeService === index
                        ? 'scale-110'
                        : 'scale-100 group-hover:scale-105'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      service.color
                    } opacity-80 transition-opacity duration-300 ${
                      activeService === index
                        ? 'opacity-90'
                        : 'group-hover:opacity-85'
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  {/* Icon & Title */}
                  <div>
                    <div
                      className={`text-white mb-4 transition-transform duration-300 ${
                        activeService === index
                          ? 'scale-110'
                          : 'group-hover:scale-105'
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p
                      className={`text-gray-100 text-sm leading-relaxed transition-all duration-500 ${
                        activeService === index ? 'opacity-100' : 'opacity-90'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div
                    className={`mt-6 transition-all duration-500 ${
                      activeService === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <Star
                            size={12}
                            className="text-blue-300 flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg py-2 px-4 text-sm font-semibold transition-all duration-300 hover:bg-white/30 hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeService === index && (
                  <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Service Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index
                  ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Featured Service Detail */}
        <div
          className={`bg-gradient-to-r ${
            services[activeService].color
          } rounded-2xl p-8 text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">
                    {services[activeService].title}
                  </h3>
                  <span className="text-blue-400">Featured Service</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                {services[activeService].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 hover:bg-blue-50">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="text-2xl font-bold">0{activeService + 1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
