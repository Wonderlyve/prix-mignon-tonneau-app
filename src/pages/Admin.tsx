
import Header from '@/components/Header';
import AdminTable from '@/components/AdminTable';
import { Shield, BarChart3 } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-light-gray font-inter">
      <Header />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-royal-blue to-sky-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-sky-blue" />
            <h1 className="text-4xl md:text-5xl font-bold font-inter">
              Espace Administration
            </h1>
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
          
          <AdminTable />
        </div>
      </section>
    </div>
  );
};

export default Admin;
