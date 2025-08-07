import React from 'react';
import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import { useParallax } from '../hooks/useParallax';

const Contact: React.FC = () => {
  const parallaxOffset = useParallax(0.1);
  // Formspree integration: no React state or handlers needed

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-beige-50 via-beige-100/50 to-beige-200/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-beige-200/20 to-beige-300/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-beige-100/15 to-beige-200/15 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-beige-400/50 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-beige-500/60 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-40 right-32 w-18 h-18 bg-beige-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-beige-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-olive-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in working together? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-olive-400" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Send me an email</h3>
                <p className="text-gray-600">{personalInfo.email}</p>
              </div>
            </div>
            
            <form action="https://formspree.io/f/mzzvkgab" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-200 focus:border-olive-300 transition-colors duration-200 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-200 focus:border-olive-300 transition-colors duration-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-200 focus:border-olive-300 transition-colors duration-200 outline-none"
                  placeholder="Job Opportunity / Project Collaboration"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-olive-200 focus:border-olive-300 transition-colors duration-200 outline-none resize-none"
                  placeholder="Hi! I'd like to discuss a potential opportunity with you..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-olive-200 hover:bg-olive-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;