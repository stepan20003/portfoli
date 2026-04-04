import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      navigate('/order-confirmation', { state: { orderDetails: { ...formData, total: cartTotal } } });
    }, 2000);
  };

  return (
    <div className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-10 flex items-center justify-between">
          <Link to="/cart" className="flex items-center text-primary-600 hover:text-primary-900 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-primary-900">Checkout</h1>
          <div className="w-24"></div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                <span className="bg-primary-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                <span className="bg-primary-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Shipping Address
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">Street Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">ZIP Code</label>
                    <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">Country</label>
                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-5 py-4 border border-primary-200 rounded-2xl focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all bg-white font-medium">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                <span className="bg-primary-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Payment Method
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                    paymentMethod === 'card' ? 'border-primary-900 bg-primary-50 shadow-inner' : 'border-primary-100 hover:border-primary-200 bg-white'
                  }`}
                >
                  <CreditCard className="h-6 w-6 text-primary-900" />
                  <span className="text-xs font-bold text-primary-900 uppercase tracking-widest">Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                    paymentMethod === 'paypal' ? 'border-primary-900 bg-primary-50 shadow-inner' : 'border-primary-100 hover:border-primary-200 bg-white'
                  }`}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                  <span className="text-xs font-bold text-primary-900 uppercase tracking-widest">PayPal</span>
                </button>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary-50 rounded-3xl p-8 sticky top-24 border border-primary-100 shadow-sm">
              <h2 className="text-xl font-bold text-primary-900 mb-8">Order Summary</h2>

              <div className="space-y-6 mb-8 overflow-y-auto max-h-64 pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-20 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-primary-900 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-primary-400 font-bold uppercase tracking-tighter">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-primary-900">${((item.price * item.quantity).toFixed(2))}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-primary-200">
                <div className="flex justify-between text-primary-600 font-medium">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-primary-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-primary-900 font-bold text-xl pt-4">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-900 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 mt-10 transition-all shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-800'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-5 w-5" /> Confirm Order
                  </>
                )}
              </button>

              <div className="mt-10 space-y-4 pt-8 border-t border-primary-200">
                <div className="flex items-center gap-3 text-xs text-primary-500 font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary-900" />
                  <span>Secure, encrypted checkout.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-primary-500 font-medium">
                  <Truck className="h-4 w-4 text-primary-900" />
                  <span>Fast delivery with real-time tracking.</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
