import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, Truck, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-50 rounded-full mb-8">
          <ShoppingBag className="h-10 w-10 text-primary-300" />
        </div>
        <h2 className="text-4xl font-bold text-primary-900 mb-6 tracking-tight">Your cart is empty</h2>
        <p className="text-primary-600 mb-10 text-lg max-w-md mx-auto leading-relaxed">Discover our collection of premium bags and find something special for yourself.</p>
        <Link to="/" className="inline-flex items-center justify-center px-10 py-4 bg-primary-900 text-white font-bold rounded-full hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl gap-2">
          Start Shopping <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-12 tracking-tight">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-primary-100 last:border-0 transition-all">
                  <div className="w-32 h-40 flex-shrink-0 bg-primary-50 rounded-2xl overflow-hidden shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-primary-900 hover:text-primary-600 transition-colors cursor-pointer mb-1">
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4">{item.category}</p>
                        <div className="flex items-center bg-primary-50 rounded-full border border-primary-100 p-0.5 w-max">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-primary-600 hover:text-primary-900 transition-colors font-bold"
                          >-</button>
                          <span className="w-8 text-center font-bold text-primary-900 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-primary-600 hover:text-primary-900 transition-colors font-bold"
                          >+</button>
                        </div>
                      </div>
                      <div className="text-right mt-4 sm:mt-0">
                        <p className="text-xl font-bold text-primary-900 mb-1">${item.price}</p>
                        {item.quantity > 1 && <p className="text-xs text-primary-400 font-medium">Subtotal: ${((item.price * item.quantity).toFixed(2))}</p>}
                      </div>
                    </div>
                    <div className="flex gap-6 pt-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" /> Remove
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-primary-900 transition-colors">
                        <Heart className="h-4 w-4" /> Move to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-primary-50 rounded-3xl p-8 sticky top-24 shadow-sm border border-primary-100">
              <h2 className="text-xl font-bold text-primary-900 mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-primary-600 font-medium">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-primary-600 font-medium">
                  <span>Estimated Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="pt-6 border-t border-primary-200 flex justify-between items-end">
                  <span className="text-primary-900 font-bold text-lg">Total</span>
                  <span className="text-primary-900 font-bold text-2xl">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary-900 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 mb-6 transition-all shadow-lg hover:shadow-xl hover:bg-primary-800"
              >
                Checkout <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-[11px] text-primary-400 text-center font-medium leading-relaxed mb-8">Shipping and taxes calculated at checkout.</p>

              <div className="space-y-4 pt-8 border-t border-primary-200">
                <div className="flex items-center gap-3 text-xs text-primary-500 font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary-900" />
                  <span>Secure 256-bit SSL encrypted checkout.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-primary-500 font-medium">
                  <Truck className="h-4 w-4 text-primary-900" />
                  <span>Free shipping on orders over $150.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
