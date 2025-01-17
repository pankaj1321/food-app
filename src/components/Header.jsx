import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ cartItemsCount = 0, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <span className="text-primary text-3xl">🍕</span>
              <h1 className="text-2xl font-bold text-gray-800">
                Foodie<span className="text-primary">Hub</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`text-gray-600 font-medium hover:text-primary transition-colors relative group
                    ${isActive(item.path) ? 'text-primary' : ''}`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left
                      ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </motion.span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            {/* Cart Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
              onClick={() => setIsCartOpen(prev => !prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Order Now Button */}
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-colors"
              >
                Order Now
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-100"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-600 hover:text-primary transition-colors px-2 py-1
                    ${isActive(item.path) ? 'text-primary font-medium' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-colors mt-2">
                  Order Now
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
