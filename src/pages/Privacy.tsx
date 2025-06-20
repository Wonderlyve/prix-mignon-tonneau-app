
import Header from '@/components/Header';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white font-inter">
      <Header />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-royal-blue to-sky-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-sky-blue" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter">
                Politique de confidentialité
              </h1>
            </div>
            <p className="text-lg md:text-xl text-sky-blue/90 max-w-3xl mx-auto">
              Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : 18 juin 2025
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Eye className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-xl md:text-2xl font-bold text-royal-blue font-inter">
                    Collecte des données
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nous collectons uniquement les informations nécessaires au traitement de votre demande de projet :
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 ml-6">
                  <li className="list-disc">Nom complet et coordonnées de contact</li>
                  <li className="list-disc">Description et détails de votre projet</li>
                  <li className="list-disc">Budget proposé pour la réalisation</li>
                  <li className="list-disc">Type de projet (site web ou application mobile)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Lock className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-xl md:text-2xl font-bold text-royal-blue font-inter">
                    Utilisation des données
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Vos données personnelles sont utilisées exclusivement pour :
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 ml-6">
                  <li className="list-disc">Évaluer la faisabilité de votre projet</li>
                  <li className="list-disc">Vous contacter concernant votre demande</li>
                  <li className="list-disc">Vous fournir un devis personnalisé</li>
                  <li className="list-disc">Améliorer nos services</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-xl md:text-2xl font-bold text-royal-blue font-inter">
                    Protection des données
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                  appropriées pour protéger vos données personnelles contre tout accès non autorisé, 
                  modification, divulgation ou destruction.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-xl md:text-2xl font-bold text-royal-blue font-inter">
                    Vos droits
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 ml-6">
                  <li className="list-disc">Droit d'accès à vos données personnelles</li>
                  <li className="list-disc">Droit de rectification et de suppression</li>
                  <li className="list-disc">Droit à la portabilité de vos données</li>
                  <li className="list-disc">Droit d'opposition au traitement</li>
                </ul>
              </div>

              <div className="bg-light-gray p-6 rounded-2xl">
                <h3 className="font-semibold text-royal-blue mb-3 font-inter">
                  Contact
                </h3>
                <p className="text-gray-600 text-sm">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                  contactez-nous à : <strong>c.batuemi@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
