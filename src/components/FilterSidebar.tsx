
import React from 'react';
import { Filter, Smartphone, Laptop, Headphones, Gamepad2, Camera, Home } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) => {
  const categories = [
    { id: 'all', name: 'Toutes catégories', icon: Filter, count: 50000 },
    { id: 'smartphones', name: 'Smartphones', icon: Smartphone, count: 12500 },
    { id: 'laptops', name: 'Ordinateurs', icon: Laptop, count: 8200 },
    { id: 'audio', name: 'Audio & Hi-Fi', icon: Headphones, count: 6800 },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, count: 4300 },
    { id: 'photo', name: 'Photo & Vidéo', icon: Camera, count: 3200 },
    { id: 'home', name: 'Maison & Jardin', icon: Home, count: 15000 },
  ];

  const priceRanges = [
    { label: 'Moins de 50€', min: 0, max: 50 },
    { label: '50€ - 200€', min: 50, max: 200 },
    { label: '200€ - 500€', min: 200, max: 500 },
    { label: '500€ - 1000€', min: 500, max: 1000 },
    { label: 'Plus de 1000€', min: 1000, max: 5000 },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-gray-100 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center space-x-2">
        <Filter className="h-5 w-5" />
        <span>Filtres</span>
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Catégories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 border-blue-300 text-blue-800 border-2'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                  {category.count.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-md font-semibold text-gray-800 mb-4">Gamme de prix</h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => setPriceRange([range.min, range.max])}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                priceRange[0] === range.min && priceRange[1] === range.max
                  ? 'bg-green-100 border-green-300 text-green-800 border-2'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'
              }`}
            >
              <span className="font-medium">{range.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Price Range */}
      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-4">Prix personnalisé</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Prix minimum</label>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0€"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Prix maximum</label>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1000€"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
