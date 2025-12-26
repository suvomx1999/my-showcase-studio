import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-block px-4 py-2 glass rounded-full mb-6">
              <span className="text-primary font-medium">👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Shubashis Mete</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-heading">
              Full Stack Developer & AI/ML Enthusiast
            </p>
            
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              B.Tech Computer Science student at SRM Institute of Science and Technology. 
              Passionate about building intelligent applications and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-elevated"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download="Shubashis_Mete_Resume.pdf"
                className="px-8 py-4 glass-hover rounded-full font-semibold"
              >
                <Download className="inline-block mr-2 w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/suvomx1999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-hover rounded-full flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubashis-mete-909253231"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-hover rounded-full flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:shubashismete@gmail.com"
                className="w-12 h-12 glass-hover rounded-full flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className="relative animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass flex items-center justify-center">
                <img
                  src="/profile.png"
                  alt="Shubashis Mete"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
