import { ExperienceType, Achievement, Project } from '../types';

export const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'John Deere India Pvt Ltd',
    position: 'Senior Software Engineer',
    duration: 'Jul 2024 - Present',
    location: 'Pune, India',
    description: [
      'Developed a real-time camera monitoring portal (CamTracker) for production lines, integrated image feeds, implemented Redis-based caching for high-volume data handling, and optimized performance for large-scale factory environments.',
      'Redesigned UI for a production tool (JDAAT), reducing operator screen read time from 7 to 8 seconds to 2 to 3 seconds to allow faster shop floor decisions.',
      'Developed end-to-end budget management and workflow tracking tools for factory operations, building backend APIs in Go and Spring Boot, and frontend interfaces in React.js to automate manual planning and phase-based product tracking.',
      'Contributed to the agile delivery pipeline of the SCF team, coordinating with cross-functional stakeholders to iteratively deliver horizontally deployed solutions used in Deere factories around the world.',
      'Delivered multiple software initiatives with a combined estimated cost savings of over $5 million, driven by improvements in automation, visibility, and operational efficiency.'
    ],
    technologies: ['React.js', 'Go', 'Spring Boot', 'Redis', 'TypeScript', 'Agile', 'UI/UX', 'Factory Automation']
  },
  {
    id: '2',
    company: 'John Deere India Pvt Ltd',
    position: 'Graduate Engineer Trainee',
    duration: 'Jul 2023 - Jul 2024',
    location: 'Pune, India',
    description: [
      'Developed an Android-based mistake proofing application to assist operators in validating assembly processes, saving approximately 8 hours of manual effort daily.',
      'Automated internal workflow processes using PowerApps and Power Automate, reducing operational overhead and generating cost savings of up to $5,000.',
      'Contributed to a web-based HR platform built using React.js and Python, streamlining community enrollment processes and delivering estimated annual savings of $100,000.'
    ],
    technologies: ['Android (Kotlin)', 'PowerApps', 'Power Automate', 'React.js', 'Python']
  },
  {
    id: '3',
    company: 'PrepInsta (Adda247)',
    position: 'Software Developer Intern',
    duration: 'Dec 2022 - Mar 2023',
    location: 'Noida, India',
    description: [
      'Built a CRM tool to automate hiring drive updates, benefiting 500,000+ students nationwide.',
      'Improved UI on the company\'s website by identifying and resolving user experience issues.',
      'Created several Java and Android projects as placement preparation material for students.',
      'Recorded and delivered video lectures to support student learning and placement readiness.'
    ],
    technologies: ['JavaScript', 'Java', 'Android', 'Git']
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
  name: 'Aviral Pulast',
  title: 'Software Developer',
  email: 'apulast@gmail.com',
  phone: '+91 78380 48146',
  location: 'Pune, India',
  experience: '2 years',
  about: 'Passionate software developer with 2 years of experience in building scalable web applications. Experienced in modern JavaScript frameworks, cloud technologies, and agile development methodologies. Always eager to learn new technologies and contribute to innovative projects.'
};