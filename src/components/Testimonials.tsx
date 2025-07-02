
const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Kouassi",
      project: "Application de fitness personnalisée",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      quote: "TonAppTonPrix a transformé mon idée en une application incroyable. L'équipe a respecté mon budget et mes délais !",
      budget: "$15,000",
      status: "Lancée avec succès"
    },
    {
      name: "Kwame Asante",
      project: "Marketplace pour créateurs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "Grâce à leur expertise, j'ai pu lancer ma plateforme en moins de 4 mois. Les résultats dépassent mes attentes !",
      budget: "$23,000",
      status: "200+ utilisateurs actifs"
    },
    {
      name: "Fatou Diallo",
      project: "Site e-commerce durable",
      image: "https://images.unsplash.com/photo-1595956639167-e53b5ce2db00?w=400&h=400&fit=crop&crop=face",
      quote: "L'approche collaborative et transparente m'a donné confiance dès le début. Mon site génère déjà du chiffre d'affaires !",
      budget: "$11,000",
      status: "Rentable en 2 mois"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6 font-inter">
            Ils ont réalisé leurs rêves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les success stories de nos entrepreneurs qui ont transformé leurs idées en projets rentables
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="font-semibold text-royal-blue text-lg font-inter">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.project}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Budget investi</p>
                    <p className="font-bold text-royal-blue text-lg">
                      {testimonial.budget}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Résultat</p>
                    <p className="font-semibold text-green-600">
                      {testimonial.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Vous aussi, rejoignez nos success stories !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-royal-blue text-white px-4 py-2 rounded-full text-sm font-medium">
              💡 Idées innovantes
            </span>
            <span className="bg-sky-blue text-royal-blue px-4 py-2 rounded-full text-sm font-medium">
              ⚡ Développement rapide
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              📈 Résultats mesurables
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
