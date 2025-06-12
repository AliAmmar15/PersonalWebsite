
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Sparkles, Zap, Sun, Moon } from 'lucide-react';
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
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      {/* Theme Toggle */}
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-3 bg-card/80 backdrop-blur-lg border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-72 h-72 bg-gradient-to-tr from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-bl from-pink-500/20 to-rose-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-lg animate-bounce delay-1000"></div>
      </div>

      {/* Enhanced floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 animate-bounce delay-300">
          <Code className="w-8 h-8 text-blue-500/60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-bounce delay-500">
          <Sparkles className="w-6 h-6 text-purple-500/70" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-bounce delay-700">
          <Zap className="w-7 h-7 text-emerald-500/60" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-bounce delay-1000">
          <Github className="w-6 h-6 text-orange-500/50" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center relative z-10 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Enhanced greeting text */}
            <div className="mb-4 animate-scale-in">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold rounded-full text-sm border border-blue-500/20 backdrop-blur-sm">
                ✨ Welcome to my digital universe
              </span>
            </div>

            {/* Enhanced main heading with dynamic gradient */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-slide-in-right">
              Ali Ammar
            </h1>
            
            {/* Enhanced subtitle */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Computer Science Student & AI Enthusiast
            </h2>
            
            {/* Enhanced description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300">
              Crafting innovative solutions through code, AI, and creativity. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"> Turning ideas into reality</span>, 
              one project at a time.
            </p>
            
            {/* Enhanced stats cards with gradients */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-500">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3.4</div>
                <div className="text-sm text-muted-foreground group-hover:text-blue-600 transition-colors">GPA</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg border border-emerald-500/20 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-muted-foreground group-hover:text-emerald-600 transition-colors">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-lg border border-orange-500/20 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-muted-foreground group-hover:text-orange-600 transition-colors">Years Experience</div>
              </div>
            </div>
            
            {/* Enhanced social links with gradients */}
            <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
              <a
                href="https://github.com/AliAmmar15"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-slate-600 to-slate-800 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-500/25"
              >
                <Github size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground">
                  GitHub
                </span>
              </a>
              <a
                href="https://linkedin.com/in/ali-ammar-629b41328"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Linkedin size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:aammar0712@gmail.com"
                className="group relative p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <Mail size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground">
                  Email
                </span>
              </a>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="animate-fade-in delay-1000">
              <button
                onClick={() => scrollToSection('about')}
                className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm text-muted-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  Discover More
                </span>
                <div className="animate-bounce">
                  <ArrowDown size={32} className="text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
