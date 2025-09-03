import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, MapPin, GraduationCap, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Hero = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Advanced Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-3 bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in-up">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              {/* Main Heading */}
              <div className="space-y-4 animate-fade-in-up animate-stagger-1">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">Ali</span>{' '}
                  <span className="text-primary">Ammar</span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl">
                  Computer Science Student & AI Enthusiast building innovative solutions through code
                </h2>
              </div>

              {/* Key Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-in-up animate-stagger-2">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" />
                  <span>Oakland University</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Sterling Heights, MI</span>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up animate-stagger-3">
                <a
                  href="mailto:aammar0712@gmail.com"
                  className="professional-button flex items-center gap-2"
                >
                  <Mail size={18} />
                  Get in touch
                </a>
                <a
                  href="tel:+15866685859"
                  className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all duration-300"
                >
                  Call me
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in-up animate-stagger-4">
                <a
                  href="https://github.com/AliAmmar15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ali-ammar-629b41328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="lg:col-span-5 animate-fade-in-up animate-stagger-2">
              <div className="grid grid-cols-2 gap-6">
                
                {/* GPA Card */}
                <div className="professional-card p-6 text-center hover-lift-intense">
                  <div className="text-3xl font-bold text-primary mb-2">3.5</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>

                {/* Graduation Card */}
                <div className="professional-card p-6 text-center hover-lift-intense">
                  <div className="text-3xl font-bold text-primary mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>

                {/* Projects Card */}
                <div className="professional-card p-6 text-center hover-lift-intense">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>

                {/* Experience Card */}
                <div className="professional-card p-6 text-center hover-lift-intense">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>

                {/* Skills Overview - Spanning full width */}
                <div className="col-span-2 professional-card p-6 hover-tilt">
                  <h3 className="font-semibold text-foreground mb-4">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'TypeScript', 'React', 'AI/ML', 'SQL'].map((skill, index) => (
                      <span 
                        key={skill} 
                        className={`px-3 py-1 bg-primary/10 text-primary text-sm rounded-full animate-elastic-scale animate-stagger-${index + 1}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animate-stagger-5">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;