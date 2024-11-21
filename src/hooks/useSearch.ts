import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

export function useSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ');
    const filtered = products.filter((product) => {
      const searchString = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      return searchTerms.every((term) => searchString.includes(term));
    });

    setResults(filtered);
  }, [query]);

  return results;
}