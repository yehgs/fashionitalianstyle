import React from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Wholesale Fashion',
      'Custom Solutions',
      'Quality Assurance',
      'Global Logistics',
      'Trend Consulting',
      'Brand Protection',
    ],
    company: [
      'About Us',
      'Our Mission',
      'Brand Partners',
      'Quality Standards',
      'Sustainability',
    ],
    support: [
      'Contact Us',
      'FAQ',
      'Shipping Info',
      'Return Policy',
      'Size Guide',
      'Support Center',
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Fashion Italian Style
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading supplier of premium Italian fashion garments, specializing
              in wholesale clothing solutions for retailers and businesses
              worldwide.
            </p>

            {/* Rating */}
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={14}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">5.0</span>
              </div>
              <div className="text-xs text-gray-500">
                Trusted by 500+ clients worldwide
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#services`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#about`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <div className="text-gray-400">
                  VIA GRANDI, 114
                  <br />
                  44122 MODENA, ITALY
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <div className="text-gray-400">+39-351-7371613</div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@fashionitalian.style"
                  className="text-gray-400"
                >
                  info@fashionitalian.style
                </a>
              </div>
            </div>

            {/* <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#contact`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul> */}

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <h4 className="text-sm font-semibold text-blue-400 mb-2">
                Business Hours
              </h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat: 10:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
                <div className="text-blue-400 mt-2">
                  CET (Central European Time)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 bg-slate-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Fashion Italian Style. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Premium Italian Fashion • Wholesale Clothing Solutions • Global
                Supply
              </p>
            </div>

            {/* Legal & Business Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-gray-500">
              <span>P. IVA: IT05275160280</span>
              <span className="hidden md:inline">•</span>
              <span>Modena, Italy</span>
              <span className="hidden md:inline">•</span>
              <span>Fashion Excellence Since 2009</span>
            </div>

            {/* Quality Badge */}
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-lg border border-slate-600/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-medium">
                Certified Quality
              </span>
            </div>
          </div>

          {/* Additional Info Bar */}
          <div className="mt-4 pt-4 border-t border-slate-700/30">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-gray-500">
              <span>🇮🇹 Made in Italy</span>
              <span>✓ ISO 9001 Certified</span>
              <span>🌍 Worldwide Shipping</span>
              <span>🔒 Secure Transactions</span>
              <span>📞 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-50"></div>

      {/* Custom Styles */}
      <style jsx>{`
        footer {
          position: relative;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.5),
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
