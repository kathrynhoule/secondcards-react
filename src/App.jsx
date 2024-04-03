import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Filter from './pages/Shop';
import ProductGallery from './ProductGallery';

function App() {
  return (
    //<Router>
      <div className="App">
        <Header />
        <Filter />
        <ProductGallery />
      </div>
  //</Router>
  );
}

export default App;
