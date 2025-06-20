
import { Heart, Users, Target } from 'lucide-react';

const AboutCampaign = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6 font-inter">
            Notre mission : soutenir les entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous croyons que chaque grande idée mérite sa chance. C'est pourquoi nous nous engageons à accompagner les entrepreneurs dans leur transformation digitale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-inter">
              Passion pour l'innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nous sommes passionnés par les projets innovants qui apportent de la valeur aux utilisateurs et transforment les industries.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-inter">
              Communauté d'entrepreneurs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rejoignez une communauté dynamique d'entrepreneurs qui partagent leurs expériences et s'entraident pour réussir.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-inter">
              Objectifs réalisables
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nous vous aidons à définir des objectifs clairs et réalisables pour maximiser les chances de succès de votre projet.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 font-inter">
            Prêt à transformer votre idée en succès ?
          </h3>
          <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'entrepreneurs qui nous font déjà confiance pour donner vie à leurs projets digitaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-blue-100/90">Projets soumis</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-blue-100/90">Taux de satisfaction</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold">3 mois</div>
              <div className="text-blue-100/90">Délai moyen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCampaign;
