
const Skills = () => {
  const coreCompetencies = [
    "Conversion Rate Optimization",
    "Data Storytelling", 
    "Cross-Functional Collaboration",
    "Experimentation Strategy",
    "Personalization Strategy",
    "Campaign Optimization",
    "Stakeholder Communication",
    "UX/UI Understanding",
    "Mentoring & Training"
  ];

  const technicalSkills = [
    "A/B Testing (Adobe Target, VWO, Optimizely)",
    "Adobe Analytics",
    "Google Analytics", 
    "Adobe Experience Manager (AEM)",
    "FullStory",
    "SQL (Beginner)",
    "Excel & Tableau",
    "HTML & CSS Basics"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Core Competencies
              </h2>
              <div className="flex flex-wrap gap-3">
                {coreCompetencies.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30 hover:bg-purple-600/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
