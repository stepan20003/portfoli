import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data';
import { ShoppingCart, Heart, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('search')?.toLowerCase();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-900 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6 animate-fade-in">New Collection 2026</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-900 leading-tight mb-6">Modern Essentials <br /><span className="text-primary-400">for Every Journey</span></h1>
            <p className="text-lg text-primary-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">Discover our collection of handcrafted, premium leather bags designed for style and functionality.</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/?category=Totes" className="px-8 py-4 bg-primary-900 text-white font-bold rounded-full hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Shop Collection <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="px-8 py-4 bg-white text-primary-900 font-bold border-2 border-primary-900 rounded-full hover:bg-primary-50 transition-all flex items-center justify-center gap-2">
                Watch Film
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200" alt="Hero Bag" className="w-full h-auto object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tight">Curated Selection</h2>
            <p className="text-primary-500 font-medium max-w-md">Browse our range of high-quality bags tailored for your everyday needs.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-primary-900 font-bold text-sm cursor-pointer hover:opacity-70 transition-opacity">
              <Filter className="h-4 w-4" /> Filter <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex bg-primary-50 p-1.5 rounded-full">
              {['Totes', 'Backpacks', 'Crossbody'].slice(0,3).map(cat => (
                <Link
                  key={cat}
                  to={`/?category=${cat}`}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${categoryFilter === cat ? 'bg-white text-primary-900 shadow-sm' : 'text-primary-400 hover:text-primary-600'}`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col h-full animate-fade-in-up">
              <div className="relative aspect-[4/5] bg-primary-50 rounded-2xl overflow-hidden mb-6">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </Link>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-primary-900" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full bg-primary-900/90 backdrop-blur-md text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-primary-900 transition-colors shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-primary-900 hover:text-primary-600 transition-colors cursor-pointer">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="font-bold text-primary-900">${product.price}</p>
                </div>
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
