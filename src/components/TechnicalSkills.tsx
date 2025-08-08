import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const TechnicalSkills: React.FC = () => {
  const parallaxOffset = useParallax(0.1);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={20} />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Backend',
      icon: <Database size={20} />,
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'GraphQL'],
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Database & Cloud',
      icon: <Cloud size={20} />,
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={20} />,
      skills: ['Git', 'Jenkins', 'Socket.io', 'JWT', 'Stripe API', 'Chart.js', 'D3.js'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-beige-50 via-beige-100/50 to-beige-200/30 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-olive-200 mx-auto"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-stone-50 hover:bg-stone-100 text-gray-700 rounded-lg text-sm transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;