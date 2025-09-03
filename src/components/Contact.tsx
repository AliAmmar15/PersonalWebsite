import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aammar0712@gmail.com',
      href: 'mailto:aammar0712@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(586) 668-5859',
      href: 'tel:+15866685859',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sterling Heights, MI',
      href: null,
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@AliAmmar15',
      href: 'https://github.com/AliAmmar15',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Ali Ammar',
      href: 'https://linkedin.com/in/ali-ammar-629b41328',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and meaningful conversations. 
            Feel free to reach out if you'd like to discuss a project or just connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Methods */}
          <div className="space-y-8 animate-fade-in-up animate-stagger-1">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const content = (
                  <div className="professional-card p-6 hover-lift-intense group transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-foreground font-medium mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </div>
                );

                return method.href ? (
                  <a key={index} href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Follow me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 professional-card hover-lift-intense transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent size={20} />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="animate-fade-in-up animate-stagger-2">
            
            {/* Main CTA Card */}
            <div className="professional-card p-8 hover-tilt text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                <Send size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a dedicated developer, have a project idea, or just want to connect 
                with a fellow tech enthusiast, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:aammar0712@gmail.com"
                  className="professional-button flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send Email
                </a>
                <a
                  href="tel:+15866685859"
                  className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Me
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="professional-card p-6 mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-foreground">Available for opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently seeking internships and entry-level positions
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-border pt-8 mt-16 text-center animate-fade-in-up animate-stagger-3">
          <p className="text-muted-foreground">
            © 2025 Ali Ammar. Crafted with passion using React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;