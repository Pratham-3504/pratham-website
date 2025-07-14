
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate developer creating digital experiences with modern technologies. 
              Always learning, always building.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#resume" className="block text-gray-300 hover:text-white transition-colors">Resume</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://github.com/Pratham-3504" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:prathamsoni7084@gmail.com" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Pratham Soni. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
