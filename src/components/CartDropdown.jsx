import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDropdown = ({ isOpen, cartItems, onClose, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Cart dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-4 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Shopping Cart</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center p-4 hover:bg-gray-50"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(index)}
                        className="ml-4 text-red-500 hover:text-red-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between mb-4">
                <span className="text-base font-medium">Total</span>
                <span className="text-base font-medium">${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors"
                onClick={() => {
                  // Handle checkout
                  alert('Proceeding to checkout...');
                }}
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDropdown;
