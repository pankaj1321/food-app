import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pizza', 'Burger', 'Pasta', 'Sushi', 'Dessert', 'Salad'];

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, basil, and olive oil",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
      category: "Pizza"
    },
    {
      id: 2,
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato, and cheese",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
      category: "Burger"
    },
    {
      id: 3,
      name: "Chicken Alfredo",
      description: "Creamy pasta with grilled chicken and parmesan",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1000&auto=format&fit=crop",
      category: "Pasta"
    },
    {
      id: 4,
      name: "Sushi Roll Platter",
      description: "Assorted fresh sushi rolls with wasabi and soy sauce",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
      category: "Sushi"
    },
    {
      id: 5,
      name: "BBQ Chicken Wings",
      description: "Crispy wings tossed in smoky BBQ sauce",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1000&auto=format&fit=crop",
      category: "Appetizer"
    },
    {
      id: 6,
      name: "Caesar Salad",
      description: "Crisp romaine, croutons, parmesan, Caesar dressing",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1000&auto=format&fit=crop",
      category: "Salad"
    },
    {
      id: 7,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with melted mozzarella",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop",
      category: "Pizza"
    },
    {
      id: 8,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1000&auto=format&fit=crop",
      category: "Dessert"
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl lg:text-5xl font-bold text-center mb-8"
      >
        Our Menu
      </motion.h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FoodCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Menu;
