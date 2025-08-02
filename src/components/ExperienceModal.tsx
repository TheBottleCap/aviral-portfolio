import React from 'react';
import { X, MapPin, Calendar } from 'lucide-react';
import { ExperienceType } from '../types';

interface ExperienceModalProps {
  experience: ExperienceType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose }) => {
  if (!isOpen || !experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-stone-100 p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">{experience.position}</h3>
              <h4 className="text-xl text-olive-300 font-medium">{experience.company}</h4>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-200"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h5 className="text-lg font-medium text-gray-800 mb-4">Key Responsibilities & Achievements</h5>
          <ul className="space-y-3 mb-8">
            {experience.description.map((desc, i) => (
              <li key={i} className="text-gray-600 leading-relaxed flex items-start">
                <span className="w-2 h-2 bg-olive-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {desc}
              </li>
            ))}
          </ul>
          
          <h5 className="text-lg font-medium text-gray-800 mb-4">Technologies Used</h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-2 bg-olive-50 text-olive-600 rounded-lg text-sm font-medium border border-olive-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;