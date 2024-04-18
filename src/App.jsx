import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Account from './pages/Account';
import { ShopContextProvider } from './context/ShopContext';

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ShopContextProvider>
      </div>
    </Router>
  );
}

export default App;
