import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase();

  const displayedProducts = searchQuery
    ? products.filter(p => 
        p.title.toLowerCase().includes(searchQuery) || 
        p.description.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery)
      )
    : products.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (only show if not searching) */}
      {!searchQuery && (
        <div className="bg-brand-green text-brand-light py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <img 
              src="/logo.png" 
              alt="APNA DOKAAN Logo" 
              className="h-32 sm:h-48 w-auto mx-auto mb-8 object-contain rounded-2xl shadow-2xl bg-white p-4" 
            />
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-brand-gold">
              APNA DOKAAN
            </h1>
            <p className="mt-4 text-2xl font-semibold text-brand-light/90">
              We Review, You Shop
            </p>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-brand-light/70">
              Reviewed recommendations for electronics, home goods, and more. Find exactly what you need at the best prices.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Search results for "{searchQuery}"
            </h2>
            <p className="text-gray-500 mt-2">Found {displayedProducts.length} products</p>
          </div>
        )}

        {/* Categories Quick Links (only show if not searching) */}
        {!searchQuery && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
              <Link to="/categories" className="text-brand-green hover:text-brand-gold font-medium flex items-center gap-1 transition-colors">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categories.slice(0, 5).map(category => (
                <Link
                  key={category}
                  to={`/categories?category=${encodeURIComponent(category)}`}
                  className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow border border-gray-100 hover:border-brand-green group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-brand-green transition-colors">
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {searchQuery ? 'Products' : 'Featured Products'}
          </h2>
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Link to="/" className="mt-4 inline-block text-brand-green font-medium hover:text-brand-gold transition-colors">
                Clear search
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
