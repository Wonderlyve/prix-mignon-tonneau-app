
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Comment ça marche', href: '/comment-ca-marche' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Soumettre un projet', href: '/soumettre', highlight: true }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec dégradé harmonisé */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-royal-blue via-purple-dark to-sky-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-royal-blue font-inter">
                TonAppTonPrix
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-inter transition-colors ${
                    item.highlight
                      ? 'bg-gradient-to-r from-royal-blue via-purple-dark to-sky-blue text-white hover:from-royal-blue/90 hover:via-purple-dark/90 hover:to-sky-blue/90'
                      : isActiveLink(item.href)
                      ? 'text-royal-blue bg-sky-blue/10'
                      : 'text-gray-700 hover:text-royal-blue hover:bg-light-gray'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-light-gray inline-flex items-center justify-center p-2 rounded-md text-royal-blue hover:bg-sky-blue/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue transition-all duration-200"
            >
              <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-light-gray">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium font-inter transition-all duration-200 transform ${
                  item.highlight
                    ? 'bg-gradient-to-r from-royal-blue via-purple-dark to-sky-blue text-white'
                    : isActiveLink(item.href)
                    ? 'text-royal-blue bg-sky-blue/10'
                    : 'text-gray-700 hover:text-royal-blue hover:bg-light-gray'
                } ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
