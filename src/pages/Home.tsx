import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import SearchResults from '../components/SearchResults';
import { useSearch } from '../hooks/useSearch';
import { products } from '../data/products';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useSearch(searchQuery);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar productos... 🔎"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {searchQuery ? (
          <SearchResults products={searchResults} query={searchQuery} />
        ) : (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}