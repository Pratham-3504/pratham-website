import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'Employee Review System',
    description: 'A comprehensive system for managing employee performance reviews with micro-services architecture and automated workflows.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'SQL Server', 'RESTful APIs'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
    github: '#',
    demo: '#',
    featured: true
  }, {
    title: 'Communication System',
    description: 'Real-time communication platform with Twilio API integration for SMS and OTPs, featuring multi-channel engagement.',
    tech: ['Java', 'Spring Boot', 'Twilio API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    github: '#',
    demo: '#',
    featured: true
  }, {
    title: 'User Referral Services',
    description: 'Scalable referral system with unique referral codes, real-time tracking, and comprehensive admin management.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'RESTful API'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
    github: '#',
    demo: '#',
    featured: false
  }, {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with React and TypeScript, featuring dark mode and smooth animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    github: '#',
    demo: '#',
    featured: false
  }];
  return <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in building modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={project.title} className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {tech}
                    </span>)}
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;