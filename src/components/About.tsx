
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at Oakland University with a minor in Artificial Intelligence. 
                My journey in technology began with curiosity about how things work, and it has evolved into a deep 
                commitment to creating innovative solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a strong communicator and creative problem-solver, I enjoy turning ideas into real-world solutions. 
                My experience spans full-stack development, embedded systems, and AI applications, always with a focus 
                on practical implementation and user experience.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Sterling Heights, MI</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground">Focus</h3>
                  <p className="text-muted-foreground">AI & Software Engineering</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/40">AA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
