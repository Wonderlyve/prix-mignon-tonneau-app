
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter mb-6 leading-tight">
            Donnez vie à vos 
            <span className="block text-blue-200">idées digitales</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Plateforme dédiée aux entrepreneurs pour soumettre leurs projets de sites web et d'applications mobiles avec un budget personnalisé
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
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
          
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-blue-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
