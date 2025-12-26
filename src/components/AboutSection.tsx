import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B. Tech Computer Science',
    location: 'Chennai, TN',
    period: 'Jun. 2023 – May 2027',
    current: true,
  },
  {
    institution: 'Douglas Memorial Higher Secondary School',
    degree: 'Higher Secondary Certificate',
    location: 'Kolkata, WB',
    period: 'Mar. 2020 – Feb 2022',
    current: false,
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon',
    description: 'Top 40 Teams - Selected for SIH Final round',
    year: '2025',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Get To Know</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-gradient">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="glass-hover rounded-2xl p-8 animate-slide-up">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a B.Tech Computer Science student with a deep passion for building intelligent, 
                scalable applications. My journey in tech started with curiosity about how things work, 
                and has evolved into expertise in full-stack development and AI/ML.
              </p>
              <p>
                I thrive in collaborative environments and love tackling complex challenges. 
                Whether it's designing neural networks for medical imaging or building robust 
                web applications, I bring dedication and creativity to every project.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or participating in hackathons.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 glass rounded-xl">
                <div className="text-3xl font-heading font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 glass rounded-xl">
                <div className="text-3xl font-heading font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 glass rounded-xl">
                <div className="text-3xl font-heading font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Hackathon</div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            {/* Education */}
            <div className="glass-hover rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    {edu.current && (
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
                    )}
                    {!edu.current && (
                      <div className="absolute -left-[7px] top-1 w-3 h-3 bg-muted-foreground rounded-full" />
                    )}
                    <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-hover rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Achievements</h3>
              </div>
              
              {achievements.map((achievement, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{achievement.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
