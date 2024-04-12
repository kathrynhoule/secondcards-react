import React, { useState, useEffect } from 'react';
import './Shop.css';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

function Shop() {

     const [searchFilteredProducts, setSearchFilteredProducts] = useState([]);
     const [gameFilteredProducts, setGameFilteredProducts] = useState([]);

     useEffect(() => {
          setSearchFilteredProducts(products);
     }, []);

     const handleSearch = (filteredProducts) => {
          setSearchFilteredProducts(filteredProducts);
     };

     const handleGameFilter = (selectedGames) => {
          if (selectedGames.length === 0) {
               setGameFilteredProducts(searchFilteredProducts);
          } else {
               const filtered = searchFilteredProducts.filter(product => selectedGames.includes(product.game));
               setGameFilteredProducts(filtered);
          }
     };

     return (
          <div>
               <div className = "searchbarcontainer">
               <SearchBar products = {products} onSearch= {handleSearch} />
               </div>
               <div className="shop">
               <Sidebar onGameFilterChange={handleGameFilter} />
               <ProductList products={gameFilteredProducts.length > 0 ? gameFilteredProducts : searchFilteredProducts} />
               </div>
          </div>
     );
}
   
export default Shop;