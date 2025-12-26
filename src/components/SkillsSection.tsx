import { Code, Database, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'HTML'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Frameworks',
    icon: Wrench,
    skills: ['Spring Boot', 'React.js', 'Node.js', 'REST API', 'Express.js'],
    color: 'from-blue-500 to-violet-500',
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Postman', 'Streamlit', 'Jupyter Notebook'],
    color: 'from-violet-500 to-pink-500',
  },
  {
    title: 'Libraries',
    icon: BookOpen,
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'PyTorch'],
    color: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    color: 'from-orange-500 to-yellow-500',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-gradient">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-hover rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Visualization */}
        <div className="mt-16 glass rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Full Stack Development', level: 85 },
              { name: 'Machine Learning / AI', level: 80 },
              { name: 'Database Management', level: 75 },
              { name: 'Cloud & DevOps', level: 70 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `slideRight 1.5s ease-out ${index * 0.2}s forwards`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
