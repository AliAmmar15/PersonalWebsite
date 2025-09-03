import React from 'react';
import { Github, ExternalLink, Code, Brain, Gamepad2, Heart, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Code Review Tool',
      description: 'Developed an AI-powered Java code review tool with a JavaFX frontend and Spring Boot backend, enabling automated code quality analysis and actionable feedback.',
      features: [
        'Automated code quality analysis and actionable feedback',
        'Integrated database support using SQLite and advanced backend technologies',
        'Enhanced code optimization with AWS, Firebase, and scalable architecture'
      ],
      techStack: ['Java', 'JavaFX', 'Spring Boot', 'SQLite', 'AWS', 'Firebase'],
      githubUrl: 'https://github.com/AliAmmar15',
      icon: Code,
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Snake Game Leaderboard',
      description: 'Developed a multiplayer-ready Snake game with global and local leaderboards, player statistics, and secure authentication using Socket.IO.',
      features: [
        'Implemented a smooth gaming experience and interactive UI with Pygame',
        'Engineered RESTful API endpoints and socket communication for seamless integration',
        'Integrated JWT-based authentication and secure communication protocols'
      ],
      techStack: ['Python', 'Flask', 'SQLite', 'Pygame', 'Socket.IO', 'JWT'],
      githubUrl: 'https://github.com/AliAmmar15',
      icon: Gamepad2,
      category: 'Game Development'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Developed machine learning models for heart disease prediction using Logistic Regression, Random Forest, and XGBoost.',
      features: [
        'Integrated GUI and RESTful API to ensure training data accuracy for clinical decision support',
        'Utilized Python project management, coordinate job sites, and facilitate partnerships',
        'Achieved high prediction accuracy with optimized machine learning algorithms'
      ],
      techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'REST API'],
      githubUrl: 'https://github.com/AliAmmar15',
      icon: Heart,
      category: 'Machine Learning'
    },
    {
      title: 'TradeLink',
      description: 'Building a collaboration and planning platform for the construction industry to connect builders, designers, and trades.',
      features: [
        'Streamlined project management, coordinate job sites, and facilitate partnerships',
        'Engineering solutions to optimize communication, scheduling, and trust within construction teams',
        'Leveraging modern web development tools, project is still in work in progress'
      ],
      techStack: ['TypeScript', 'Modern Web Development', 'Project Management'],
      githubUrl: 'https://github.com/AliAmmar15',
      icon: TrendingUp,
      category: 'Web Development',
      inProgress: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my software development and AI projects
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className={`professional-card p-8 hover-lift-intense group ${
                  project.featured ? 'lg:col-span-2' : ''
                } animate-fade-in-up animate-stagger-${index + 1}`}
              >
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.inProgress && (
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, project.featured ? 3 : 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;