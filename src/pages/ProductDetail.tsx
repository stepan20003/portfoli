import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { ShoppingBag, Star, ArrowLeft, Heart, Share2, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.images[0] || '');

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-primary-600 hover:text-primary-900 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery Side */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-primary-50 shadow-sm border border-primary-100 group">
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden bg-primary-50 border-2 transition-all ${
                    activeImage === img ? 'border-primary-900 shadow-md ring-2 ring-primary-100' : 'border-transparent hover:border-primary-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary-100 text-primary-900 text-xs font-bold uppercase tracking-widest rounded-full">{product.category}</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="h-4 w-4 fill-current" /> 4.9 (42 Reviews)
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 tracking-tight leading-tight">{product.name}</h1>
              <p className="text-2xl font-bold text-primary-900 mb-8">${product.price}.00</p>
              <p className="text-primary-600 text-lg leading-relaxed mb-10">{product.description}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-primary-50 rounded-full border border-primary-100 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-primary-600 hover:text-primary-900 transition-colors text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-primary-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-primary-600 hover:text-primary-900 transition-colors text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                    <Check className="h-4 w-4" /> In Stock & Ready to Ship
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-grow bg-primary-900 text-white py-4 px-8 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:bg-primary-800"
                  >
                    <ShoppingBag className="h-5 w-5" /> Add to Cart
                  </button>
                  <button className="p-4 border-2 border-primary-200 rounded-full hover:bg-primary-50 transition-all">
                    <Heart className="h-6 w-6 text-primary-900" />
                  </button>
                  <button className="p-4 border-2 border-primary-200 rounded-full hover:bg-primary-50 transition-all">
                    <Share2 className="h-6 w-6 text-primary-900" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-primary-100">
              <div className="text-center">
                <Truck className="h-6 w-6 text-primary-900 mx-auto mb-3" />
                <p className="text-xs font-bold text-primary-900 uppercase mb-1">Free Delivery</p>
                <p className="text-[10px] text-primary-400 font-medium">On all orders over $150</p>
              </div>
              <div className="text-center border-x border-primary-100">
                <RotateCcw className="h-6 w-6 text-primary-900 mx-auto mb-3" />
                <p className="text-xs font-bold text-primary-900 uppercase mb-1">Easy Returns</p>
                <p className="text-[10px] text-primary-400 font-medium">30-day money back guarantee</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="h-6 w-6 text-primary-900 mx-auto mb-3" />
                <p className="text-xs font-bold text-primary-900 uppercase mb-1">Secure Payment</p>
                <p className="text-[10px] text-primary-400 font-medium">100% encrypted transaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-32 pt-24 border-t border-primary-100">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary-900">Customer Reviews</h2>
            <button className="text-primary-900 font-bold border-b-2 border-primary-900 pb-1 hover:text-primary-600 hover:border-primary-600 transition-all">
              Write a Review
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.reviews.map(review => (
              <div key={review.id} className="bg-primary-50 p-8 rounded-3xl border border-primary-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-bold text-primary-900 text-lg mb-1">{review.author}</p>
                    <p className="text-xs text-primary-400 font-medium">{review.date}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-primary-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-primary-600 italic leading-relaxed font-medium">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
