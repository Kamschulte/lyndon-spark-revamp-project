
import { ChevronDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">
          <img
            src="https://cdn.glitch.global/511ba398-71cf-415b-9eeb-c94df8a846bf/Screenshot_20250604_145543_Gallery.jpg?v=1749074219684"
            alt="Photo of Lyndon"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-8 border-4 border-blue-400/30 shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Lyndon Kamschulte
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>Senior Marketing Analyst</strong>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Web Optimization, A/B Testing and Analytics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('https://cdn.glitch.global/511ba398-71cf-415b-9eeb-c94df8a846bf/Lyndon Kamschulte Resume.pdf?v=1749928993114', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download My Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://forms.gle/P5a7JxVDUcUbAqoe8', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
