
import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS', 'SQL'],
    },
    {
      title: 'Frameworks/Tools',
      icon: Code,
      skills: ['Flask', 'React', 'Next.js', 'OpenCV', 'PowerShell', 'Linux/Unix'],
    },
    {
      title: 'Design/Modeling',
      icon: Code,
      skills: ['Adobe Creative Suite', 'SolidWorks', 'AutoCAD'],
    },
    {
      title: 'Domains',
      icon: Code,
      skills: ['AI', 'Neural Networks', 'Web Development', 'Computer Networking', 'Embedded Systems'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
