
import Header from '@/components/Header';
import ProjectFormWithPopup from '@/components/ProjectFormWithPopup';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubmitProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white font-inter">
      <Header />
      
      {/* Hero section avec dégradé harmonisé */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Lightbulb className="w-8 h-8 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold font-inter">
                Partagez votre vision
              </h1>
            </div>
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous pour soumettre votre projet. 
              Notre équipe l'examinera attentivement et vous contactera sous 5-7 jours ouvrés.
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

      {/* Form section */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFormWithPopup />
        </div>
      </section>

      {/* Info section avec dégradé harmonisé */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">5-7 jours</div>
              <p className="text-blue-100/90">Délai d'évaluation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">100%</div>
              <p className="text-blue-100/90">Confidentialité garantie</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-200 mb-2">$100</div>
              <p className="text-blue-100/90">Budget minimum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitProject;
