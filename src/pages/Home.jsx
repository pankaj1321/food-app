import React from 'react';
import { motion } from 'framer-motion';
import FoodCard from '../components/FoodCard';
import ReviewCard from '../components/ReviewCard';

const Home = ({ foodItems, reviews, addToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 lg:py-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Delicious Food Delivered
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From our kitchen to your doorstep
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Order Now
          </motion.button>
        </motion.div>

        <section className="mb-16 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {foodItems.slice(0, 8).map((item) => (
              <FoodCard
                key={item.id}
                {...item}
                onAddToCart={() => addToCart(item)} // Ensure this function is passed correctly
              />
            ))}
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white rounded-xl mb-16 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </section>

        <section className="mb-16 lg:mb-20">
          <div className="bg-primary rounded-xl text-white p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto">Get your favorite food delivered in minutes</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Ordering
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
