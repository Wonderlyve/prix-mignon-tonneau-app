
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AdminTableReal from '@/components/AdminTableReal';
import AdminLogin from '@/components/AdminLogin';
import { Shield, BarChart3 } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifier si l'utilisateur est déjà connecté (session)
  useEffect(() => {
    const adminSession = localStorage.getItem('adminAuthenticated');
    if (adminSession === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('adminAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-light-gray font-inter">
      <Header />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-royal-blue via-purple-dark to-sky-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-sky-blue" />
              <h1 className="text-4xl md:text-5xl font-bold font-inter">
                Espace Administration
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Déconnexion
            </button>
          </div>
          <p className="text-xl text-sky-blue/90 text-center max-w-3xl mx-auto">
            Gérez les projets soumis, suivez les statistiques et prenez des décisions éclairées 
            pour accompagner nos entrepreneurs.
          </p>
        </div>
      </section>

      {/* Admin content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-8">
            <BarChart3 className="w-6 h-6 text-royal-blue" />
            <h2 className="text-2xl font-bold text-royal-blue font-inter">
              Tableau de bord
            </h2>
          </div>
          
          <AdminTableReal />
        </div>
      </section>
    </div>
  );
};

export default Admin;
