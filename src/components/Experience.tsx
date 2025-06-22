
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "AbbVie", 
      period: "April 2025 - Present",
      location: "North Chicago, IL (Remote)",
      description: [
        "Analyze website performance using Adobe Analytics and Adobe Target, identifying key optimization opportunities and collaborating with cross-functional teams to improve key metrics and drive data-informed strategy.",
        "Lead A/B testing strategy and reporting for AbbVie's brand websites, leveraging Adobe Analytics and Target to define hypotheses, measure performance, and support marketing objectives.",
        "Facilitate cross-functional collaboration with UX, dev, and content teams to drive data-backed optimization initiatives across digital touchpoints.",
        "Build clear testing documentation and reporting frameworks to ensure transparency and alignment with internal stakeholders.",
        "Mentor teams on analytics best practices and evangelize a culture of experimentation through actionable insights and stakeholder workshops."
      ]
    },
    {
      title: "Marketing Optimization Analyst",
      company: "Autodesk",
      period: "September 2022 - April 2025", 
      location: "San Francisco, CA (Remote)",
      description: [
        "Provided subject matter expertise in A/B testing, personalization, and conversion rate optimization to the Autodesk Fusion marketing organization, enhancing digital experiences and fostering a data-driven culture focused on continuous improvement strategies.",
        "Owned the quarterly experimentation roadmap for Autodesk Fusion, managing prioritization, test design, stakeholder alignment, and outcome reporting.",
        "Implemented a targeted website personalization for active commercial subscribers, resulting in a 15% growth in multi-seat subscriptions. Developed additional personalizations for active and expired trial users to enhance engagement and conversion.",
        "Leveraged Adobe Analytics and heat mapping tools to monitor site performance, assess global optimization efforts, and identify opportunities to enhance the user journey. Shared actionable insights with leadership and the wider marketing team to guide strategic decisions, and collaborated with content management teams to implement updates using AEM.",
        "Drove cross-functional collaboration across development, design, and marketing teams to implement UX/UI enhancements, resulting in a 12% improvement in conversion rates on primary landing pages.",
        "Managed and mentored a Data Analyst intern, providing training in Adobe Analytics, Adobe Target, Fullstory, and data storytelling to strengthen team capabilities."
      ]
    },
    {
      title: "Conversion Rate Optimization Manager",
      company: "Conversion Sciences",
      period: "February 2022 - June 2022",
      location: "Austin, TX (Remote)", 
      description: [
        "Led conversion rate optimization (CRO) strategy for six B2B/B2C eCommerce client accounts with $57M in annual revenue, leveraged analytics audits, website optimization, and A/B testing to enhance digital experiences.",
        "Collaborated closely with client leadership and senior stakeholders to develop a tailored A/B testing strategy and presented progress and results in weekly executive briefings.",
        "Generated $32K in monthly recurring revenue, working cross-functionally with clients, engineering and marketing to sustain progress and manage expectations.",
        "Increased a client's subscription conversion rate by 34% through strategic A/B testing and UX improvements, leading to enhanced customer engagement and retention.",
        "Leveraged VWO, Optimizely, Google Optimize, Google Analytics, Hotjar, and user behavior data to create and optimize conversion optimization initiatives that drove significant improvements in purchase rates."
      ]
    },
    {
      title: "Conversion Analyst", 
      company: "Conversion Sciences",
      period: "June 2021 - February 2022",
      location: "Austin, TX (Remote)",
      description: [
        "Successfully managed four eCommerce client accounts within the first month of employment during the COO's paternity leave, maintaining key client relationships and delivering measurable conversion rate improvements.",
        "Utilized Google Analytics, VWO, Optimizely, and event tracking tools to design and implement comprehensive A/B testing strategies, identifying key opportunities for conversion improvements."
      ]
    },
    {
      title: "International Marketing Specialist II: Website Optimization & Strategy",
      company: "Sling TV | DISH",
      period: "April 2020 - June 2021",
      location: "Denver, CO",
      description: [
        "Led Sling TV's international website authoring and optimization strategy for 15 language groups using Adobe Experience Manager, SEO best practices, analytics insights and A/B testing to enhance digital experiences.",
        "Developed A/B tests and experiences using Adobe Target, increasing trial and conversion rates.",
        "Created weekly and ad-hoc performance reports using Adobe Analytics, providing actionable insights to leadership teams that drove customer acquisition and optimized marketing campaigns.",
        "Managed website content authoring in AEM, optimized UX/UI across devices, enhanced customer journeys, and led performance monitoring efforts to ensure high engagement and conversion rates."
      ]
    },
    {
      title: "International Marketing Specialist",
      company: "Sling TV | DISH", 
      period: "February 2019 - April 2020",
      location: "Denver, CO",
      description: [
        "Led website content management, AEM authoring, SEO strategy, and site optimization efforts, resulting in increased engagement and subscriber growth.",
        "Monitored key website performance metrics using Google Analytics and Adobe Analytics.",
        "Executed a sitewide accessibility assessment, aligning with WCAG standards to ensure an inclusive and compliant user experience.",
        "Managed the migration of Sling TV's blog and content assets from WordPress to AEM, ensuring SEO compliance, content integrity, and a seamless user experience across international markets.",
        "Collaborated effectively with engineering and UI/UX teams to enhance AEM components, improving the design and function of the sling.com website."
      ]
    },
    {
      title: "Digital Development Intern",
      company: "National Business Furniture",
      period: "April 2018 – August 2018", 
      location: "Milwaukee, WI",
      description: [
        "Supported the website development team during a site migration, collaborating with IT, engineering, and marketing in an agile environment.",
        "Documented new systems to streamline processes and ensure efficient knowledge transfer."
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
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
              className="mb-12 bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                  <div className="flex items-center text-white mb-2">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic">{exp.location}</p>
                </div>
              </div>
              
              <ul className="text-gray-300 space-y-3 leading-relaxed pl-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="list-disc">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
