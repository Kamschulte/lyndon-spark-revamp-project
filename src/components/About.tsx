
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Full-stack development with modern technologies and best practices"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Building and mentoring high-performing engineering teams"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Driving technological innovation and digital transformation"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business outcomes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-300 leading-relaxed mb-12 space-y-6">
            <p>
              I'm a passionate software engineer and technology leader with extensive experience in full-stack development, 
              team management, and driving digital transformation initiatives. My journey in technology has been driven by 
              a constant desire to learn, innovate, and create solutions that make a real impact.
            </p>
            <p>
              Throughout my career, I've had the privilege of working with diverse teams and technologies, from startups 
              to enterprise environments. I believe in the power of collaboration, continuous learning, and building 
              software that not only meets technical requirements but also delivers exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
