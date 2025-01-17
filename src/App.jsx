import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDropdown from './components/CartDropdown'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, id: Date.now() }]);
    setIsCartOpen(true); // Open cart when item is added
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const foodItems = [
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

  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      profession: "Food Blogger",
      rating: 5,
      comment: "The best food delivery service I've ever used! The quality and taste are consistently excellent.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      profession: "Food Critic",
      rating: 5,
      comment: "Impressive variety and the food arrives hot and fresh every time. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Sarah Williams",
      profession: "Restaurant Owner",
      rating: 4,
      comment: "Great selection of cuisines and excellent customer service. A go-to for busy days.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="relative">
          <Header 
            cartItemsCount={cartItems.length}
            setIsCartOpen={setIsCartOpen}
          />
          <CartDropdown
            isOpen={isCartOpen}
            cartItems={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemoveFromCart={removeFromCart}
          />
        </div>
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                foodItems={foodItems}
                reviews={reviews}
                addToCart={addToCart}
              />
            } 
          />
          <Route path="/menu" element={<Menu addToCart ={addToCart}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App
