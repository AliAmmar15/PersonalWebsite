
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just connect!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:aammar0712@gmail.com"
              className="flex flex-col items-center space-y-4 p-6 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Mail size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">aammar0712@gmail.com</p>
              </div>
            </a>
            
            <a
              href="https://github.com/AliAmmar15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4 p-6 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Github size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                <p className="text-muted-foreground">@AliAmmar15</p>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/ali-ammar-629b41328"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4 p-6 bg-muted/50 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Linkedin size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">Ali Ammar</p>
              </div>
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2025 Ali Ammar. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
