import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;
  const [orderId] = React.useState(() => `LX-${Math.floor(100000 + Math.random() * 900000)}`);

  useEffect(() => {
    if (!orderDetails) {
      const timer = setTimeout(() => navigate('/'), 5000);
      return () => clearTimeout(timer);
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">No order details found</h2>
        <p className="text-primary-600 mb-10 text-lg font-medium">Redirecting you to the home page...</p>
        <Link to="/" className="inline-flex items-center px-10 py-4 bg-primary-900 text-white font-bold rounded-full shadow-lg">
          Go Home Now
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8 shadow-inner ring-8 ring-green-50">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4 tracking-tight">Order Confirmed!</h1>
          <p className="text-primary-600 text-lg font-medium">Your order <span className="text-primary-900 font-bold">#{orderId}</span> has been placed.</p>
        </div>

        <div className="bg-primary-50 rounded-[40px] p-10 mb-12 border border-primary-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="text-xl font-bold text-primary-900 mb-8 border-b border-primary-200 pb-4">Shipping Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-3">Address</h3>
              <p className="text-primary-900 font-bold mb-1">{orderDetails.firstName} {orderDetails.lastName}</p>
              <p className="text-primary-600 font-medium text-sm leading-relaxed">{orderDetails.address}<br />{orderDetails.city}, {orderDetails.zipCode}<br />{orderDetails.country}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-3">Contact</h3>
              <p className="text-primary-600 font-medium text-sm mb-1">{orderDetails.email}</p>
              <p className="text-primary-600 font-medium text-sm">{orderDetails.phone}</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-200 flex justify-between items-end">
            <span className="text-primary-900 font-bold text-lg uppercase tracking-wider">Total Paid</span>
            <span className="text-primary-900 font-bold text-3xl">${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="flex items-start gap-5 p-8 border border-primary-100 rounded-[30px] bg-white hover:shadow-md transition-shadow">
            <div className="bg-primary-50 p-3 rounded-2xl">
                <Package className="h-6 w-6 text-primary-900" />
            </div>
            <div>
              <h4 className="font-bold text-primary-900 mb-2">Preparing Order</h4>
              <p className="text-sm text-primary-500 leading-relaxed font-medium">We're getting your items ready for shipment. You'll receive an email shortly.</p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-8 border border-primary-100 rounded-[30px] bg-white hover:shadow-md transition-shadow">
            <div className="bg-primary-50 p-3 rounded-2xl">
                <Truck className="h-6 w-6 text-primary-900" />
            </div>
            <div>
              <h4 className="font-bold text-primary-900 mb-2">Express Delivery</h4>
              <p className="text-sm text-primary-500 leading-relaxed font-medium">Estimated arrival in 3-5 business days via our premium express courier.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary-900 text-white font-bold rounded-full hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl group"
          >
            Continue Shopping <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary-900 text-primary-900 font-bold rounded-full hover:bg-primary-50 transition-all"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
