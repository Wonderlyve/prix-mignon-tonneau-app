
import React, { useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { Search, TrendingUp, Shield, Clock } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Données d'exemple
  const mockProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro 128GB",
      category: "smartphones",
      prices: [
        { store: "Apple Store", price: 1229, shipping: 0, rating: 4.8 },
        { store: "Amazon", price: 1199, shipping: 5.99, rating: 4.7 },
        { store: "Fnac", price: 1249, shipping: 0, rating: 4.6 },
        { store: "Darty", price: 1219, shipping: 9.99, rating: 4.5 }
      ],
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      bestPrice: 1199
    },
    {
      id: 2,
      name: "MacBook Air M3 13\"",
      category: "laptops",
      prices: [
        { store: "Apple Store", price: 1299, shipping: 0, rating: 4.9 },
        { store: "Amazon", price: 1249, shipping: 0, rating: 4.8 },
        { store: "Boulanger", price: 1279, shipping: 0, rating: 4.7 },
        { store: "LDLC", price: 1269, shipping: 12.90, rating: 4.6 }
      ],
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      bestPrice: 1249
    },
    {
      id: 3,
      name: "AirPods Pro 2ème génération",
      category: "audio",
      prices: [
        { store: "Apple Store", price: 279, shipping: 0, rating: 4.8 },
        { store: "Amazon", price: 249, shipping: 0, rating: 4.7 },
        { store: "Fnac", price: 269, shipping: 3.99, rating: 4.6 },
        { store: "Carrefour", price: 259, shipping: 5.90, rating: 4.4 }
      ],
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      bestPrice: 249
    }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.bestPrice >= priceRange[0] && product.bestPrice <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Ton App Ton Prix
              </h1>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Prix vérifiés</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Mis à jour en temps réel</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trouvez le meilleur prix pour tous vos achats
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Comparez instantanément les prix de milliers de produits chez tous les marchands
          </p>
          
          <SearchHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
            <div className="text-gray-600">Produits comparés</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600">Marchands partenaires</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
            <div className="text-gray-600">Économies moyennes</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {filteredProducts.length} produits trouvés
                {searchQuery && ` pour "${searchQuery}"`}
              </h3>
            </div>

            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
