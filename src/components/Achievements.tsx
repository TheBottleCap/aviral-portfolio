import React from 'react';
import { Award, BookOpen, Target, PenLine, Users, User } from 'lucide-react';
import { achievements } from '../utils/constants';
import { useParallax } from '../hooks/useParallax';

const Achievements: React.FC = () => {
  const parallaxOffset = useParallax(0.15);

  const getIcon = (category: string) => {
    switch (category) {
      case 'certification':
        return <BookOpen size={20} />;
      case 'publication':
        return <PenLine size={20} />;
      case 'court':
        return <Users size={20} />;
      case 'leadership':
        return <User size={20} />;
      case 'award':
        return <Award size={20} />;
      case 'milestone':
        return <Target size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'certification':
        return 'bg-blue-100 text-blue-600';
      case 'publication':
        return 'bg-pink-100 text-pink-600';
      case 'court':
        return 'bg-indigo-100 text-indigo-600';
      case 'leadership':
        return 'bg-orange-100 text-orange-600';
      case 'award':
        return 'bg-yellow-100 text-yellow-600';
      case 'milestone':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-purple-100 text-purple-600';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-white via-stone-50/30 to-olive-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-olive-100/20 to-stone-100/20 rounded-full blur-2xl animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-16 w-44 h-44 bg-gradient-to-br from-beige-100/15 to-olive-100/15 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/3 left-1/2 w-5 h-5 bg-stone-300/60 rounded-full animate-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-olive-400/50 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-7 h-7 bg-gradient-to-br from-stone-200/40 to-beige-200/40 rotate-45 animate-float-reverse" style={{ animationDelay: '5s' }}></div>
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-40 right-48 w-18 h-18 bg-stone-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-48 left-32 w-26 h-26 bg-olive-200 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">{'Achievements & Responsibilities'}</h2>
          <div className="w-20 h-1 bg-olive-200 mx-auto"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-stone-50 rounded-2xl p-6 hover:bg-stone-100 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getCategoryColor(achievement.category)}`}>
                  {getIcon(achievement.category)}
                </div>
                <span className="text-sm text-gray-500">{achievement.date}</span>
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;