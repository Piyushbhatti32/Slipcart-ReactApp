import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import ScrollToTop from "./Components/scrolltotop";
import { Image } from "react-bootstrap";
import { iphone17pro, iphoneair, iphone17, iphone16, iphone16e } from "./Products/iPhone/iPhone";
import { galaxya35, galaxys24Ultra, galaxys25Ultra, galaxyzfold6, galaxyzflip6 } from "./Products/Samsung/Samsung";
import { oneplus13, oneplus13R, oneplus13s, oneplusnord5, oneplusnordce5 } from "./Products/OnePlus/OnePlus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const products = [
    {
      id: 1,
      Image: <Image src={iphone17pro} alt="iPhone 17 Pro" fluid className="product-img"/>,
      name: "iPhone 17 Pro",
      price: 134900,
      category: "iPhone",
    },
    {
      id: 2,
      Image: <Image src={iphoneair} alt="iPhone Air" fluid className="product-img"/>,
      name: "iPhone Air",
      price: 119900,
      category: "iPhone",
    },
    {
      id: 3,
      Image: <Image src={iphone17} alt="iPhone 17" fluid className="product-img"/>,
      name: "iPhone 17",
      price: 82900,
      category: "iPhone",
    },
    {
      id: 4,
      Image: <Image src={iphone16} alt="iPhone 16" fluid className="product-img"/>,
      name: "iPhone 16",
      price: 69900,
      category: "iPhone",
    },
    {
      id: 5,
      Image: <Image src={iphone16e} alt="iPhone 16e" fluid className="product-img"/>,
      name: "iPhone 16e",
      price: 59900,
      category: "iPhone",
    },
    {
      id: 6,
      Image: <Image src={galaxya35} alt="Galaxy A35 5G" fluid className="product-img"/>,
      name: "Galaxy A35 5G",
      price: 21999,
      category: "Samsung",
    },
    {
      id: 7,
      Image: <Image src={galaxys24Ultra} alt="Galaxy S24 Ultra" fluid className="product-img"/>,
      name: "Galaxy S24 Ultra",
      price: 134999,
      category: "Samsung",
    },
    {
      id: 8,
      Image: <Image src={galaxys25Ultra} alt="Galaxy S25 Ultra" fluid className="product-img"/>,
      name: "Galaxy S25 Ultra",
      price: 129999,
      category: "Samsung",
    },
    {
      id: 9,
      Image: <Image src={galaxyzfold6} alt="Galaxy Z Fold 6" fluid className="product-img"/>,
      name: "Galaxy Z Fold 6",
      price: 164999,
      category: "Samsung",
    },
    {
      id: 10,
      Image: <Image src={galaxyzflip6} alt="Galaxy Z Flip 6" fluid className="product-img"/>,
      name: "Galaxy Z Flip 6",
      price: 109999,
      category: "Samsung",
    },
    {
      id: 11,
      Image: <Image src={oneplus13} alt="OnePlus 13" fluid className="product-img"/>,
      name: "OnePlus 13",
      price: 63999,
      category: "OnePlus",
    },
    {
      id: 12,
      Image: <Image src={oneplus13R} alt="OnePlus 13R" fluid className="product-img"/>,
      name: "OnePlus 13R",
      price: 38999,
      category: "OnePlus",
    },
    {
      id: 13,
      Image: <Image src={oneplus13s} alt="OnePlus 13s" fluid className="product-img"/>,
      name: "OnePlus 13s",
      price: 51999,
      category: "OnePlus",
    },
    {
      id: 14,
      Image: <Image src={oneplusnord5} alt="OnePlus Nord 5" fluid className="product-img"/>,
      name: "OnePlus Nord 5",
      price: 31999,
      category: "OnePlus",
    },
    {
      id: 15,
      Image: <Image src={oneplusnordce5} alt="OnePlus Nord CE5" fluid className="product-img"/>,
      name: "OnePlus Nord CE5",
      price: 24999,
      category: "OnePlus",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const increaseCartItemQuantity = (productId, qty) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, qty: qty } : p
      )
    );
  };

  const decreaseCartItemQuantity = (productId, qty) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === productId && qty > 0 ? { ...p, qty: qty } : p
      )
    );
  };

   const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header cartCount={cartCount} products={products} />
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseCartItemQuantity={increaseCartItemQuantity} decreaseCartItemQuantity={decreaseCartItemQuantity} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
