
import { TrendingUp, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      description: "Data-driven strategies that deliver measurable business impact"
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Building partnerships between data, design, and development"
    },
    {
      icon: Lightbulb,
      title: "Experimentation Strategy",
      description: "A/B testing and personalization expertise across platforms"
    },
    {
      icon: Target,
      title: "Analytics & Insights",
      description: "Turning complex data into actionable growth strategies"
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
              I'm a data-driven digital marketer and optimization strategist with over 6 years of experience helping companies turn insights into growth. I specialize in the overlap of A/B testing, personalization, and user experience, developing data-backed strategies that not only improve websites but deliver measurable business impact.
            </p>
            <p>
              I've led experimentation, CRO and website data analysis efforts at large enterprises like AbbVie, Autodesk, and Sling TV, as well as in fast-paced agency environments. Whether it's launching high-impact A/B tests or personalizations, uncovering friction points with heatmaps, or partnering cross-functionally to improve UX/UI, I thrive on solving complex challenges that make digital experiences better for real people.
            </p>
            <p>
              I love collaborating with talented cross-functional teams and believe the best results come from strong partnerships between data, design, and development.
            </p>
            <p className="text-blue-300 font-semibold">
              If you're seeking expertise in A/B testing, personalization, or analytics, I'd love to discuss how I can contribute.
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
