import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Product, CATEGORIES } from '../types';

export default function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const displayCategory = categoryId === 'all' 
    ? 'All Products' 
    : CATEGORIES.find(c => c.toLowerCase() === categoryId) || categoryId;

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (categoryId === 'all') {
          setProducts(data);
        } else {
          setProducts(data.filter((p: Product) => p.category.toLowerCase() === categoryId?.toLowerCase()));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products', err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="border-b border-gray-200 pb-5 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">{displayCategory}</h1>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            Browse our selection of {displayCategory?.toString().toLowerCase()} products.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-24 bg-white rounded-lg border border-gray-200 border-dashed">
            <p className="text-gray-500 text-lg">No products found in this category yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
