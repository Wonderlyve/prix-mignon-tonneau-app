
import { CheckCircle, Mail, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Soumettez votre idée",
      description: "Remplissez notre formulaire détaillé avec votre vision, vos besoins et votre budget (minimum 400$)."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Évaluation professionnelle",
      description: "Notre équipe d'experts analyse votre projet sous 5-7 jours ouvrés et vous contacte."
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Concrétisation",
      description: "Nous développons ensemble votre projet digital avec un suivi personnalisé jusqu'au lancement."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-inter">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-lg text-blue-100/80">
            Découvrez les étapes clés pour transformer votre idée en réalité digitale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-blue-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-inter">
                {step.title}
              </h3>
              <p className="text-blue-100/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
