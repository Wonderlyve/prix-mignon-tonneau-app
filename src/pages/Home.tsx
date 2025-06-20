
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import AboutCampaign from '@/components/AboutCampaign';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <HeroSection />
      <HowItWorks />
      <AboutCampaign />
      <Testimonials />
      
      {/* Footer */}
      <footer className="bg-royal-blue text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 font-inter">TonAppTonPrix</h3>
              <p className="text-sky-blue/90 leading-relaxed text-sm lg:text-base">
                Nous aidons les entrepreneurs à transformer leurs idées en projets digitaux réussis, 
                avec un accompagnement personnalisé et transparent.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-inter">Liens rapides</h4>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link to="/" className="text-sky-blue/90 hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/comment-ca-marche" className="text-sky-blue/90 hover:text-white transition-colors">
                    Comment ça marche
                  </Link>
                </li>
                <li>
                  <Link to="/a-propos" className="text-sky-blue/90 hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/soumettre" className="text-sky-blue/90 hover:text-white transition-colors">
                    Soumettre un projet
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-sky-blue/90 hover:text-white transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-inter">Contact</h4>
              <p className="text-sky-blue/90 mb-4 text-sm lg:text-base">
                Une question ? Une idée à partager ?
              </p>
              <Link to="/soumettre">
                <Button className="w-full sm:w-auto bg-sky-blue text-royal-blue hover:bg-sky-blue/90 font-medium px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base">
                  Démarrer mon projet
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-sky-blue/30 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-sky-blue/70 text-sm lg:text-base">
              © 2024 TonAppTonPrix. Tous droits réservés. Fait avec ❤️ pour les entrepreneurs.
            </p>
          </div>
        </div>
      </footer>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-royal-blue text-white p-3 rounded-full shadow-lg hover:bg-royal-blue/90 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
};

export default Home;
