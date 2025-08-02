import React from 'react';
import { ArrowDown, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-stone-50/30 to-olive-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-olive-200/40 to-stone-200/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-br from-beige-200/30 to-olive-100/30 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-stone-300/50 to-olive-200/50 rounded-full blur-xl animate-pulse-glow"></div>
        
        {/* Small floating dots */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-olive-300/60 rounded-full animate-drift"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-stone-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-beige-400/40 rounded-full animate-float-reverse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 left-2/3 w-2 h-2 bg-olive-400/70 rounded-full animate-drift" style={{ animationDelay: '6s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-stone-200/40 to-olive-200/40 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-beige-300/50 to-stone-300/50 rotate-12 animate-float-reverse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-40 left-40 w-20 h-20 bg-olive-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-60 right-40 w-32 h-32 bg-stone-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-60 h-60 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-olive-100 to-stone-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-white overflow-hidden">
                <img
                  src="/aphoto.jpeg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover object-center"
                  draggable={false}
                />
              </div>
            </div>
            
            {/* Written Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-6 tracking-tight">
                Hi, I'm <span className="font-medium text-olive-300">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
                {personalInfo.title} with {personalInfo.experience} of experience
              </p>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                {personalInfo.about}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-olive-300" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-olive-300" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-olive-300" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToExperience}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-olive-200 hover:bg-olive-300 text-gray-800 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  View Experience
                  <ArrowDown size={16} />
                </button>
                
                <a
                  href="/resume.pdf"
                  download="Your_Name_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-stone-200 hover:bg-stone-300 text-gray-800 rounded-full transition-all duration-300 hover:transform hover:scale-105"
                >
                  Download Resume
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;