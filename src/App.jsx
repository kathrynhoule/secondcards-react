import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Account from './pages/Account';
import { ShopContextProvider } from './context/ShopContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <ShopContextProvider>
        <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ShopContextProvider>
      </div>
    </Router>
  );
}

export default App;
