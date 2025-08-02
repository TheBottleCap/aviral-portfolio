import { ExperienceType, Achievement, Project } from '../types';

export const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Software Developer',
    duration: 'Jan 2022 - Present',
    location: 'Bangalore, India',
    description: [
      'Developed and maintained scalable web applications using React.js and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and optimized application performance',
      'Participated in code reviews and mentored junior developers',
      'Led the development of a customer portal that increased user engagement by 40%',
      'Optimized database queries resulting in 30% faster page load times',
      'Implemented automated testing strategies reducing bugs in production by 50%',
      'Worked closely with product managers to define technical requirements',
      'Contributed to architectural decisions for microservices migration'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS']
  },
  {
    id: '2',
    company: 'Innovation Labs',
    position: 'Junior Software Developer',
    duration: 'Jun 2021 - Dec 2021',
    location: 'Mumbai, India',
    description: [
      'Built RESTful APIs and integrated third-party services',
      'Worked on database design and optimization',
      'Contributed to agile development processes',
      'Gained experience in testing and debugging applications',
      'Developed internal tools that improved team productivity by 25%',
      'Participated in daily standups and sprint planning sessions',
      'Created comprehensive documentation for API endpoints',
      'Collaborated with QA team to ensure high-quality deliverables',
      'Learned and implemented CI/CD pipelines using Jenkins'
    ],
    technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Docker', 'Git']
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'AWS Cloud Practitioner Certification',
    description: 'Achieved AWS Cloud Practitioner certification demonstrating foundational cloud knowledge',
    date: 'March 2023',
    category: 'certification'
  },
  {
    id: '2',
    title: 'Best Performance Award',
    description: 'Recognized for outstanding performance and contribution to team success',
    date: 'December 2022',
    category: 'award'
  },
  {
    id: '3',
    title: 'Full Stack Development Bootcamp',
    description: 'Completed intensive 6-month bootcamp covering modern web technologies',
    date: 'May 2021',
    category: 'certification'
  },
  {
    id: '4',
    title: '10+ Projects Delivered',
    description: 'Successfully delivered over 10 projects with 100% client satisfaction',
    date: 'Ongoing',
    category: 'milestone'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Responsive task management application with real-time collaboration features',
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/task-manager'
  },
  {
    id: '3',
    title: 'Weather Analytics Dashboard',
    description: 'Data visualization dashboard for weather analytics with interactive charts and forecasting',
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'Chart.js'],
    githubUrl: 'https://github.com/username/weather-dashboard'
  }
];

export const personalInfo = {
  name: 'Your Name',
  title: 'Software Developer',
  email: 'your.email@example.com',
  phone: '+91 98765 43210',
  location: 'Bangalore, India',
  experience: '2.5 years',
  about: 'Passionate software developer with 2.5 years of experience in building scalable web applications. Experienced in modern JavaScript frameworks, cloud technologies, and agile development methodologies. Always eager to learn new technologies and contribute to innovative projects.'
};