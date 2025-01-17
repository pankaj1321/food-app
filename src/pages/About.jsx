import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: "🌟",
      title: "Quality Food",
      description: "We use only the finest ingredients to create delicious meals that satisfy your cravings."
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Our efficient delivery system ensures your food arrives hot and fresh at your doorstep."
    },
    {
      icon: "💝",
      title: "Best Service",
      description: "Our dedicated team is committed to providing you with exceptional customer service."
    },
    {
      icon: "🍽️",
      title: "Wide Selection",
      description: "From local favorites to international cuisine, we offer a diverse menu to suit every taste."
    }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Head Chef",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "With 15 years of culinary experience, John brings creativity and expertise to every dish."
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Manager",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      description: "Sarah ensures smooth operations and maintains our high standards of service."
    },
    {
      name: "Michael Chen",
      role: "Sous Chef",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      description: "Michael's passion for fusion cuisine adds unique flavors to our menu."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Welcome to FoodieHub, where passion for food meets exceptional service. 
          Since 2020, we've been serving delicious meals made with love and care, 
          bringing smiles to our customers one plate at a time.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary text-white p-12 rounded-xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          To deliver not just food, but memorable dining experiences. We strive to bring 
          restaurant-quality meals to your home, combining convenience with culinary excellence.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
