
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-blue-800/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image principale - entre appbar et texte */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/10b1b8ab-5eba-4836-9c9b-8c6c6205b090.png" 
              alt="Innovation digitale" 
              className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 object-contain rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Contenu texte */}
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-6 leading-tight">
            Donnez vie à vos 
            <span className="block text-blue-200">idées digitales</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            Plateforme dédiée aux entrepreneurs pour soumettre leurs projets de sites web et d'applications mobiles avec un budget personnalisé
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        
        <div className="text-center mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-blue-200" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
