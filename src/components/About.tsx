import React from 'react';
import { Code, Server, Smartphone, Palette } from 'lucide-react';
const About = () => {
  const skills = [{
    icon: Code,
    title: 'Frontend Development',
    description: 'React.js, Angular.js',
    color: 'text-blue-600 dark:text-blue-400'
  }, {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Java, Spring Boot, RESTful APIs',
    color: 'text-green-600 dark:text-green-400'
  }, {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Progressive Web Apps',
    color: 'text-purple-600 dark:text-purple-400'
  }, {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe Creative Suite, User Research',
    color: 'text-pink-600 dark:text-pink-400'
  }];
  
  return <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center px-[20px] py-[5px] text-xl font-medium">Hello Everyone, I'm Pratham Soni, a passionate Java Developer and a final-year Computer Science student at Shri Vaishnav Vidyapeeth Vishwavidyalaya. 
I specialize in crafting scalable, efficient, and innovative digital solutions using robust Java technologies. I enjoy working on challenging projects that push the boundaries of technology.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => <div key={skill.title} className="text-center group animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={32} className={skill.color} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>)}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently pursuing B.Tech in Computer Science & Engineering, I've been passionate about 
                technology since my early days. I've worked on various projects including employee review 
                systems, communication platforms, and user referral services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                When I'm not coding, you can find me exploring new frameworks, contributing to open source, 
                or working on personal projects.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                  2+
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Years of Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">Building web applications</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">5+</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Projects Completed</h4>
                  <p className="text-gray-600 dark:text-gray-300">From concept to deployment</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                  5★
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">HackerRank Rating</h4>
                  <p className="text-gray-600 dark:text-gray-300">Problem solving expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
