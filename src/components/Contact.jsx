import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const contactRef = useRef(null);
  const formRef = useRef(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (formData) => {
    try {
      const templateParams = {
        to_name: 'Fashion Italian Team', // or import.meta.env?.VITE_TO_NAME || process.env?.REACT_APP_TO_NAME
        fullname: formData.name,
        companyName: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        // Additional fields that might be useful
        from_name: formData.name,
        reply_to: formData.email,
      };

      const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.'
        );
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      return { success: true };
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // Reset form using ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['VIA GRANDI, 114', '44122 MODENA, ITALY'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+39-351-7371613'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['commerciale@fashionitalian.style'],
    },
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your fashion business? Contact us today for premium
            clothing solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-slate-900 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index + 3) * 150}ms`
                      : '0ms',
                  }}
                >
                  <IconComponent
                    className="text-blue-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-blue-400 mb-2">
                      {info.title}
                    </div>
                    {info.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Company Registration */}
            <div
              className={`bg-gradient-to-r from-blue-900/50 to-slate-900/50 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: isVisible ? '750ms' : '0ms' }}
            >
              <h4 className="font-semibold mb-2 text-blue-400">
                Company Registration
              </h4>
              <p className="text-sm text-gray-300">P. IVA: IT05275160280</p>
              <div className="mt-3 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">
                  Verified Business
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Send us a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all hover:border-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all hover:border-slate-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+39 123 456 7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all hover:border-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all hover:border-slate-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your fashion needs..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none hover:border-slate-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20 animate-fade-in">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center p-4 bg-red-900/20 rounded-lg border border-red-500/20 animate-fade-in">
                  ❌ Error sending message. Please try again or contact us
                  directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
