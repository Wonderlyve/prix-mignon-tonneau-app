
import Header from '@/components/Header';
import { ArrowLeft, CheckCircle, Mail, Rocket, Lightbulb, Shield, Clock, FileText, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "1. Partagez votre idée",
      description: "Remplissez notre formulaire détaillé avec votre vision, vos objectifs et votre budget",
      details: ["Description complète du projet", "Fonctionnalités souhaitées", "Public cible", "Budget disponible (aucune limite)"],
      image: "/lovable-uploads/bc558741-9340-449e-91a4-17becb18ab0f.png"
    },
    {
      icon: FileText,
      title: "2. Notre équipe évalue",
      description: "Nous analysons la faisabilité technique et l'adéquation budget/projet",
      details: ["Analyse de faisabilité", "Estimation du temps", "Évaluation du budget", "Retour sous 5-7 jours"],
      image: "/lovable-uploads/d0e486ab-edfc-4355-9c52-43415e40d6f1.png"
    },
    {
      icon: CheckCircle,
      title: "3. Validation et planification",
      description: "Si votre projet est retenu, nous établissons un plan détaillé ensemble",
      details: ["Cahier des charges", "Planning de développement", "Points de contrôle", "Communication régulière"],
      image: "/lovable-uploads/840664cb-5689-479e-b462-c5bfa5a86c08.png"
    },
    {
      icon: Rocket,
      title: "4. Développement et livraison",
      description: "Nous développons votre projet avec des retours réguliers jusqu'à la livraison",
      details: ["Développement agile", "Démos régulières", "Tests qualité", "Formation à l'utilisation"],
      image: "/lovable-uploads/0e53f3ac-b097-4542-87fc-94a32093a136.png"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Délais respectés",
      description: "Planning clair et suivi rigoureux pour respecter vos échéances"
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un chef de projet dédié pour vous accompagner à chaque étape"
    },
    {
      icon: Star,
      title: "Qualité garantie",
      description: "Code propre, tests complets et formation pour l'autonomie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white font-inter">
      <Header />
      
      {/* Hero section avec thème unifié */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6">
              Comment ça marche ?
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto">
              Un processus simple et transparent pour transformer vos idées en réalité digitale
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

      {/* Steps */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-royal-blue font-inter">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-3xl shadow-lg overflow-hidden">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team collaboration section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-6 font-inter">
                Une équipe dédiée à votre succès
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Notre approche collaborative garantit que votre vision soit parfaitement comprise et réalisée selon vos attentes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Communication transparente tout au long du projet</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Expertise technique et conseil stratégique</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Support continu après livraison</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/1cf04749-be77-4b2a-9509-067d955b09f1.png" 
                  alt="Équipe collaborative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-6 font-inter">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche unique qui place l'entrepreneur au cœur du processus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-royal-blue mb-4 font-inter">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à concrétiser votre idée ?
          </h2>
          <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les entrepreneurs qui ont fait confiance à TonAppTonPrix pour transformer leurs visions en réalité digitale.
          </p>
          <Link 
            to="/soumettre"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Soumettre mon projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
