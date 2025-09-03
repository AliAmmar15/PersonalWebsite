import React from 'react';
import { User, Target, Code, Brain, MapPin, Mail, Phone, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Experience with modern web technologies, backend APIs, and database management'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Specialized knowledge in artificial intelligence applications and predictive modeling'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Strong analytical skills with focus on practical, scalable solutions'
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, innovation, and creating meaningful solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in-up animate-stagger-1">
            
            {/* Professional Profile */}
            <div className="professional-card p-8 hover-tilt">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <User size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Professional Profile</h3>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Computer Science student at Oakland University with a minor in Artificial Intelligence, 
                  passionate about developing innovative software solutions and exploring the frontiers of AI technology.
                </p>
                
                <p>
                  My academic journey has equipped me with strong foundations in programming, data structures, 
                  and algorithm design, while my hands-on projects demonstrate practical application of these concepts 
                  in real-world scenarios.
                </p>
                
                <p>
                  I thrive on challenges that require creative problem-solving and enjoy collaborating with teams 
                  to build scalable, maintainable software that makes a positive impact.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="professional-card p-6 hover-lift-intense">
              <h4 className="font-semibold text-foreground mb-6">Contact Information</h4>
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="mailto:aammar0712@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5"
                >
                  <Mail size={18} className="text-primary" />
                  <span>aammar0712@gmail.com</span>
                </a>
                <a 
                  href="tel:+15866685859" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5"
                >
                  <Phone size={18} className="text-primary" />
                  <span>(586) 668-5859</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground p-3 rounded-lg">
                  <MapPin size={18} className="text-primary" />
                  <span>Sterling Heights, MI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights & Stats */}
          <div className="space-y-8 animate-fade-in-up animate-stagger-2">
            
            {/* What I Bring */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Bring</h3>
              
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="professional-card p-6 hover-lift-intense group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Academic Stats */}
            <div className="professional-card p-8 hover-tilt">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Academic Excellence</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">3.5</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">Dec 2026</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;