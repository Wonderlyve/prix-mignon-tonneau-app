
import React, { useState } from 'react';
import { Star, TrendingDown, ShoppingCart, Eye, ExternalLink } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  prices: Array<{
    store: string;
    price: number;
    shipping: number;
    rating: number;
  }>;
  image: string;
  bestPrice: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showAllPrices, setShowAllPrices] = useState(false);
  const sortedPrices = [...product.prices].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping));
  const displayPrices = showAllPrices ? sortedPrices : sortedPrices.slice(0, 3);
  const savings = sortedPrices[sortedPrices.length - 1].price - sortedPrices[0].price;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Image */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 lg:h-32 object-cover rounded-2xl"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                <TrendingDown className="h-3 w-3" />
                <span>-{Math.round((savings / sortedPrices[sortedPrices.length - 1].price) * 100)}%</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full capitalize">
                    {product.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{product.prices.length} marchands</span>
                  </span>
                </div>

                {/* Best Price Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Meilleur prix chez {sortedPrices[0].store}</p>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-green-600">
                          {sortedPrices[0].price}€
                        </span>
                        {sortedPrices[0].shipping > 0 && (
                          <span className="text-sm text-gray-500">
                            + {sortedPrices[0].shipping}€ livraison
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Vous économisez</p>
                      <p className="text-xl font-bold text-green-600">{savings}€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Comparison */}
            <div className="space-y-3">
              {displayPrices.map((priceInfo, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
                    index === 0
                      ? 'bg-green-50 border-green-200 ring-2 ring-green-500/20'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="font-medium text-gray-900">{priceInfo.store}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{priceInfo.rating}</span>
                    </div>
                    {index === 0 && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Meilleur prix
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900">
                        {priceInfo.price}€
                      </div>
                      {priceInfo.shipping > 0 && (
                        <div className="text-xs text-gray-500">
                          + {priceInfo.shipping}€ livraison
                        </div>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors duration-200 flex items-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Acheter</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}

              {product.prices.length > 3 && (
                <button
                  onClick={() => setShowAllPrices(!showAllPrices)}
                  className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  {showAllPrices
                    ? 'Voir moins de prix'
                    : `Voir ${product.prices.length - 3} prix supplémentaires`}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
