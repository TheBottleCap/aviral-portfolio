import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../utils/constants';
import { useParallax } from '../hooks/useParallax';

const Projects: React.FC = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-stone-50/30 to-olive-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-36 h-36 bg-gradient-to-br from-beige-200/25 to-olive-200/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-gradient-to-br from-stone-200/20 to-beige-200/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-olive-400/60 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-stone-400/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-8 h-8 bg-gradient-to-br from-beige-300/40 to-stone-300/40 rotate-12 animate-pulse-glow" style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-32 left-36 w-20 h-20 bg-olive-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-36 right-32 w-28 h-28 bg-stone-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-olive-200 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-olive-100 to-stone-100 flex items-center justify-center">
                <span className="text-3xl font-light text-gray-400">{project.title.charAt(0)}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-stone-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-olive-100 hover:bg-olive-200 text-gray-800 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-gray-800 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;