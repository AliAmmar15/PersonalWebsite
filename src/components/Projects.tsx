
import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Code Review Tool',
      description: 'Java application using OpenAI GPT to analyze code quality, maintainability, and best practices.',
      techStack: ['Java', 'OpenAI API', 'Git'],
      githubUrl: 'https://github.com/AliAmmar15',
    },
    {
      title: 'Snake Game Leaderboard',
      description: 'Multiplayer Python game with WebSockets, real-time scores, and persistent backend.',
      techStack: ['Python', 'WebSockets', 'SQLite', 'Pygame'],
      githubUrl: 'https://github.com/AliAmmar15',
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Machine learning application built in Python with scikit-learn to predict heart disease risk.',
      techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/AliAmmar15',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
