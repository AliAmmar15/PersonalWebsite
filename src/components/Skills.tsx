
import React from 'react';
import { Code, Database, Wrench, Palette, Brain, Server, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'TypeScript', 'HTML', 'CSS', 'C/C++', 'SQL'],
      description: 'Core programming languages for software development'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Server,
      skills: ['Flask', 'scikit-learn', 'XGBoost', 'Pygame', 'React', 'Node.js', 'Next.js'],
      description: 'Modern frameworks for web and application development'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['GitHub', 'GitLab', 'JWT', 'Requests', 'Scipy', 'SQLite', 'PostgreSQL', 'Supabase'],
      description: 'Development tools and database management systems'
    },
    {
      title: 'Technical Skills',
      icon: Brain,
      skills: ['Machine Learning', 'AI Development', 'RESTful APIs', 'Socket Programming', 'Data Analysis'],
      description: 'Specialized technical competencies'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">Technologies and tools I use to build innovative solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="professional-card p-8 hover-lift">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Skills Summary */}
          <div className="mt-12 text-center">
            <div className="professional-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Additional Competencies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Problem Solving', 'Team Collaboration', 'Project Management', 'Agile Development', 'Code Review', 'Testing & Debugging'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
