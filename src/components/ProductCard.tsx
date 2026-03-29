import { ExternalLink, Info } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative h-48">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:opacity-75"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-light text-brand-green border border-brand-green/20 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-2 mb-1">
          {product.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-3">
          <p className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
          <div className="relative group flex items-center">
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 text-center pointer-events-none">
              Prices are subject to change. Click to check the latest price on Amazon.
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
          {product.description}
        </p>
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Buy on Amazon
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
