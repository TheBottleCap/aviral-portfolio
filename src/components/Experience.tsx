import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '../utils/constants';
import { useParallax } from '../hooks/useParallax';
import ExperienceModal from './ExperienceModal';
import { ExperienceType } from '../types';

const Experience: React.FC = () => {
  const parallaxOffset = useParallax(0.1);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (experience: ExperienceType) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-olive-50 via-olive-100/50 to-olive-200/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-28 h-28 bg-gradient-to-br from-olive-200/30 to-olive-300/30 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-16 right-20 w-40 h-40 bg-gradient-to-br from-olive-100/25 to-olive-200/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-olive-300/50 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-olive-400/60 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-60 left-32 w-16 h-16 bg-olive-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-olive-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-olive-200 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
              onClick={() => handleCardClick(exp)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-olive-300 font-medium mb-2">{exp.company}</h4>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 max-h-32 overflow-hidden">
                {exp.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-olive-200 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
                {exp.description.length > 3 && (
                  <li className="text-olive-400 text-sm font-medium">
                    Click to see {exp.description.length - 3} more details...
                  </li>
                )}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-stone-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ExperienceModal 
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Experience;