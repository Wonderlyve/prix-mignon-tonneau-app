
import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchHeader = ({ searchQuery, setSearchQuery }: SearchHeaderProps) => {
  const popularSearches = [
    "iPhone 15", "MacBook Air", "AirPods Pro", "Nintendo Switch", "PlayStation 5"
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-4 py-4 text-lg border border-gray-300 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200 hover:shadow-xl"
          placeholder="Recherchez un produit, une marque..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-medium">
            Rechercher
          </button>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="mt-6">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-gray-600 font-medium">Recherches populaires :</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(search)}
              className="px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 rounded-full text-sm hover:bg-white/80 transition-all duration-200 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
