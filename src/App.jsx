import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import MainContent from './MainContent';
import ProductGallery from './ProductGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />
        <ProductGallery />
      </div>
  </Router>
  );
}

export default App;
