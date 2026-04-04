import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary-900" />
            <span className="text-xl font-bold tracking-tight text-primary-900">LUXE BAGS</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors">Shop All</Link>
            <Link to="/?category=Totes" className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors">Totes</Link>
            <Link to="/?category=Backpacks" className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors">Backpacks</Link>
            <Link to="/admin" className="text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors">Admin</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-4 py-1.5 border border-primary-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 w-48 transition-all focus:w-64"
              />
              <Search className="absolute left-2.5 h-4 w-4 text-primary-400" />
            </form>

            <Link to="/cart" className="relative p-2 text-primary-600 hover:text-primary-900 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-900 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="md:hidden p-2 text-primary-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-primary-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-primary-600" onClick={() => setIsMenuOpen(false)}>Shop All</Link>
            <Link to="/?category=Totes" className="block px-3 py-2 text-base font-medium text-primary-600" onClick={() => setIsMenuOpen(false)}>Totes</Link>
            <Link to="/?category=Backpacks" className="block px-3 py-2 text-base font-medium text-primary-600" onClick={() => setIsMenuOpen(false)}>Backpacks</Link>
            <Link to="/admin" className="block px-3 py-2 text-base font-medium text-primary-600" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          </div>
          <div className="px-4 py-3 border-t border-primary-100">
            <form onSubmit={handleSearch} className="flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-2 border border-primary-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <Search className="absolute left-2.5 h-4 w-4 text-primary-400" />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
