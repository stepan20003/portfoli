import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-6 w-6 text-primary-900" />
              <span className="text-lg font-bold tracking-tight text-primary-900 uppercase">LUXE BAGS</span>
            </div>
            <p className="text-primary-500 text-sm leading-relaxed mb-6">
              Crafting timeless luxury for the modern world. Our collection of premium bags combines traditional craftsmanship with contemporary design.
            </p>
            <div className="flex space-x-4">



            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary-900 uppercase tracking-widest mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-primary-500 font-medium">
              <li><a href="/?category=Totes" className="hover:text-primary-900 transition-colors">Totes</a></li>
              <li><a href="/?category=Backpacks" className="hover:text-primary-900 transition-colors">Backpacks</a></li>
              <li><a href="/?category=Crossbody" className="hover:text-primary-900 transition-colors">Crossbody</a></li>
              <li><a href="/?category=Travel Bags" className="hover:text-primary-900 transition-colors">Travel Bags</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary-900 uppercase tracking-widest mb-6">Customer Service</h3>
            <ul className="space-y-4 text-sm text-primary-500 font-medium">
              <li><a href="#" className="hover:text-primary-900 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary-900 uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-500 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-300 shrink-0" />
                <span>123 Design Avenue, Fashion District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-300 shrink-0" />
                <span>+1 (212) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-300 shrink-0" />
                <span>support@luxebags.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-400">© 2026 LUXE BAGS. All rights reserved.</p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
