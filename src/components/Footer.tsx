
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Lyndon Kamschulte</h3>
            <p className="text-gray-400">Software Engineer & Technology Leader</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/lyndonkamschulte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a 
              href="https://github.com/lyndonkamschulte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            <a 
              href="mailto:lyndon@example.com"
              className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Lyndon Kamschulte
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
