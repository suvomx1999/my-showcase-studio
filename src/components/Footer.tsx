import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-heading font-bold text-gradient">
              SM
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} Shubashis Mete. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/suvomx1999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-hover rounded-full flex items-center justify-center group"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubashis-mete-909253231"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-hover rounded-full flex items-center justify-center group"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shubashismete@gmail.com"
              className="w-10 h-10 glass-hover rounded-full flex items-center justify-center group"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
