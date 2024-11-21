import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface SearchResultsProps {
  products: Product[];
  query: string;
}

export default function SearchResults({ products, query }: SearchResultsProps) {
  if (!query) return null;

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No hay productos encontrados para "{query}"</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}