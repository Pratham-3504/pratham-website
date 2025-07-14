
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pratham
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">A passionate Full-Stack Java Developer crafting digital experiences with modern technologies. I love building solutions that make a difference.</p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Pratham-3504" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pratham-soni-80283126b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:prathamsoni7984@gmail.com" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300">
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;
