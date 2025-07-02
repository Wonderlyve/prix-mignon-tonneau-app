
import Header from '@/components/Header';
import { ArrowLeft, Users, Target, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white font-inter">
      <Header />
      
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6">
              À propos de TonAppTonPrix
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto">
              Notre mission : démocratiser l'accès au développement digital pour tous les entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-royal-blue hover:text-royal-blue/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Content */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-royal-blue mb-6 font-inter">
                Notre vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chez TonAppTonPrix, nous croyons que chaque entrepreneur mérite d'avoir accès 
                aux outils digitaux nécessaires pour faire prospérer son business, 
                quel que soit son budget initial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre plateforme révolutionne la façon dont les projets digitaux sont conçus 
                et développés, en mettant l'accent sur la transparence, l'accessibilité et 
                la qualité.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-royal-blue mb-4 font-inter">
                Nos valeurs
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-royal-blue">Transparence</h4>
                    <p className="text-sm text-gray-600">Des prix clairs et justes pour tous</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-royal-blue">Accessibilité</h4>
                    <p className="text-sm text-gray-600">Ouvrir le digital à tous les entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-royal-blue">Passion</h4>
                    <p className="text-sm text-gray-600">L'amour du développement et de l'innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-8 md:p-12 rounded-3xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-inter">
                Rejoignez notre communauté
              </h2>
              <p className="text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto">
                Plus de 500 entrepreneurs nous font déjà confiance pour donner vie 
                à leurs projets digitaux.
              </p>
              <Link 
                to="/soumettre"
                className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Démarrer mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
