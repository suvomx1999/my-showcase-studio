import { ExternalLink, Github, Brain, Youtube, Users, Stethoscope } from 'lucide-react';

const projects = [
  {
    title: 'AI Tutor',
    description: 'Deep Q-Network based personalized learning paths with real-time visualization using reinforcement learning.',
    icon: Brain,
    technologies: ['DQL', 'Gymnasium', 'PyTorch', 'React', 'REST API'],
    period: 'November 2025 – Present',
    highlights: [
      'Designed DQN for personalized learning paths',
      'Custom RL environment modeling rewards and fatigue',
      'End-to-end ML pipeline with Streamlit visualization',
    ],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Pneumonia Detection',
    description: 'Deep learning pipeline for detecting pneumonia from chest X-rays using CNN and transfer learning.',
    icon: Stethoscope,
    technologies: ['DenseNet121', 'Grad-CAM', 'Streamlit', 'CNN', 'Git'],
    period: 'November 2025 – Present',
    highlights: [
      'End-to-end deep learning pipeline',
      'Grad-CAM visualizations for interpretability',
      'Production-ready REST API deployment',
    ],
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    title: 'YouTube Clone',
    description: 'Full-stack YouTube clone with search, video playback, and subscription features.',
    icon: Youtube,
    technologies: ['React.js', 'Node.js', 'Express', 'YouTube API'],
    period: 'July 2025 – September 2025',
    highlights: [
      'Dynamic video fetching via YouTube API',
      'Responsive UI with state management',
      'Full-stack implementation',
    ],
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    title: 'Student Management System',
    description: 'Full-stack platform with CRUD operations for students, courses, and enrollments.',
    icon: Users,
    technologies: ['Spring Boot', 'JPA', 'MySQL', 'REST API', 'Docker'],
    period: 'August 2024 – October 2024',
    highlights: [
      'JPA/Hibernate with MySQL',
      'Containerized with Docker',
      'Cloud-based deployment',
    ],
    gradient: 'from-pink-500 to-orange-500',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">My Recent Work</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-gradient">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-hover rounded-2xl overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="w-10 h-10 glass rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-primary">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 glass rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/suvomx1999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-hover rounded-full font-semibold group"
          >
            <Github className="w-5 h-5" />
            See More on GitHub
            <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
