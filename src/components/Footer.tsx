import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="./logo.png" 
              alt="APNA DOKAAN Logo" 
              className="h-12 w-auto mb-4 object-contain rounded-lg bg-white p-1.5" 
            />
            <h3 className="text-xl font-bold mb-4 text-brand-gold">APNA DOKAAN</h3>
            <p className="text-brand-light/80 text-sm font-medium mb-2">
              We Review, You Shop
            </p>
            <p className="text-brand-light/60 text-sm">
              Discover the best products handpicked just for you. We review and recommend top-rated items across various categories.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/buycrazystuff?igsh=MXNkaTVxanRtaW52dQ==" target="_blank" rel="noopener noreferrer" className="text-brand-light/60 hover:text-brand-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              
              
              
            </div>
            {/* <p className="mt-4 text-xs text-brand-light/50">
              As an Amazon Associate I earn from qualifying purchases.
            </p> */}
          </div>
        </div>
        <div className="mt-8 border-t border-brand-light/10 pt-8 flex justify-center">
          <p className="text-sm text-brand-light/60">
            &copy; {new Date().getFullYear()} APNA DOKAAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
