
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading full-stack development initiatives and mentoring junior developers in modern web technologies.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Software Development Team Lead",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description: "Managed a team of 8 developers while architecting scalable solutions for enterprise clients.",
      technologies: ["Python", "React", "PostgreSQL", "Kubernetes", "CI/CD"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description: "Built the core product from ground up, implementing both frontend and backend systems.",
      technologies: ["JavaScript", "Vue.js", "Express", "MongoDB", "Redis"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-blue-400 mb-2">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span className="text-lg">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
