
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Image de fond adaptative */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/10b1b8ab-5eba-4836-9c9b-8c6c6205b090.png" 
          alt="Innovation digitale" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-800/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-6 leading-tight">
              Donnez vie à vos 
              <span className="block text-blue-200">idées digitales</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed">
              Plateforme dédiée aux entrepreneurs pour soumettre leurs projets de sites web et d'applications mobiles avec un budget personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Link to="/soumettre">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-blue-700 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Soumets ton idée
                </Button>
              </Link>
              <Link to="/comment-ca-marche">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-yellow-400 text-blue-700 hover:bg-yellow-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Comment ça marche
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image illustration - visible sur desktop */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/10b1b8ab-5eba-4836-9c9b-8c6c6205b090.png" 
                alt="Innovation et technologie" 
                className="w-full h-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-blue-200" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
