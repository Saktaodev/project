import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return <div className="text-center py-16">Producto no encontrado ❌</div>;
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  const handleBuyNow = () => {
    const message = `Hola! Me gustaría realizar este pedido:\n\n${quantity}x ${product.name}\nTotal: $${(product.price * quantity).toFixed(2)}\n\nPor favor procesa mi orden para poder pagarla (:`;
    const whatsappUrl = `https://wa.me/+5215550589179?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">EAN: {product.ean}</p>
            <p className="text-sm text-gray-600">Categoria: {product.category}</p>
          </div>

          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-pink-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Minus className="h-5 w-5" />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="flex items-center justify-center space-x-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Añadir al carrito</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBuyNow}
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Comprar Ahora
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}