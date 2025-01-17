import React from 'react';
import { motion } from 'framer-motion';

const FoodCard = ({ name, description, price, image, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-12 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold">${price.toFixed(2)}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAddToCart}
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
