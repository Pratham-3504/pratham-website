
import React from 'react';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Using the Google Drive direct download link
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=13thibt3pnkiBJrK-0o9rkCk7ePh9RyEr';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Pratham_Soni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open in new tab for viewing
    window.open('https://drive.google.com/file/d/13thibt3pnkiBJrK-0o9rkCk7ePh9RyEr/view', '_blank');
  };

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'Bachelor of Engineering in Computer Science',
      subtitle: 'Strong foundation in software development principles'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      content: 'Full Stack Java Developer',
      subtitle: 'Specializing in Spring Boot and microservices'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      content: 'Java, Spring Boot, React, SQL and NoSQL',
      subtitle: 'Modern web development technologies'
    },
    {
      icon: Award,
      title: 'Projects',
      content: 'Focus over:',
      subtitle: 'Enterprise-level application, Scalable and Secure architecture, Problem-solving'
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my complete resume or view it online to learn more about my experience, skills, and achievements.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              {/* Resume Preview Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center justify-center">
                  <FileText size={64} className="mb-4" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Pratham Soni</h3>
                <p className="text-center text-blue-100">Full Stack Java Developer</p>
              </div>

              {/* Action Buttons */}
              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={handleView}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <Eye size={20} />
                    <span>View Resume</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Download size={20} />
                    <span>Download PDF</span>
                  </button>
                </div>

                {/* Resume Highlights */}
                <div className="grid md:grid-cols-2 gap-6">
                  {resumeHighlights.map((highlight, index) => (
                    <div
                      key={highlight.title}
                      className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <highlight.icon size={24} className="text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-1 text-base">
                          {highlight.content}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {highlight.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
