import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hydrating Face Serum',
    description: 'Advanced hydrating formula with hyaluronic acid for deep moisturization and plump, healthy-looking skin.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'Skincare',
    ean: '1234567890123'
  },
  {
    id: '2',
    name: 'Matte Lipstick Collection',
    description: 'Long-lasting, highly pigmented matte lipstick that stays comfortable all day.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'Makeup',
    ean: '2345678901234'
  },
  {
    id: '3',
    name: 'Vitamin C Brightening Cream',
    description: 'Powerful antioxidant cream that helps brighten skin and fade dark spots.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'Skincare',
    ean: '3456789012345'
  },
  {
    id: '4',
    name: 'Vitamin C Brightening Cream',
    description: 'Powerful antioxidant cream that helps brighten skin and fade dark spots.',
    price: 342.99,
    image: '/src/public/eyeliner.webp',
    category: 'Skincare',
    ean: '3456789012345'
  }
];