import Header from '@/components/Header';
import ProjectForm from '@/components/ProjectForm';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubmitProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white font-inter">
      <Header />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-royal-blue to-purple-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Lightbulb className="w-8 h-8 text-sky-blue" />
              <h1 className="text-4xl md:text-5xl font-bold font-inter">
                Partagez votre vision
              </h1>
            </div>
            <p className="text-xl text-sky-blue/90 max-w-3xl mx-auto">
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
          <ProjectForm />
        </div>
      </section>

      {/* Info section */}
      <section className="bg-royal-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-blue mb-2">5-7 jours</div>
              <p className="text-sky-blue/90">Délai d'évaluation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-blue mb-2">100%</div>
              <p className="text-sky-blue/90">Confidentialité garantie</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-blue mb-2">400$</div>
              <p className="text-sky-blue/90">Budget minimum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitProject;
