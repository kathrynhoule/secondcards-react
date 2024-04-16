import React, { useState, useEffect } from 'react';
import './Shop.css';
import SearchBar from '../components/SearchBar';
import {products} from '../data/ProductData';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

function Shop() {

     const [searchFilteredProducts, setSearchFilteredProducts] = useState([]);
     const [gameFilteredProducts, setGameFilteredProducts] = useState([]);
     const [typeFilteredProducts, setTypeFilteredProducts] = useState([]);
     const [priceFilteredProducts, setPriceFilteredProducts] = useState([]);

     useEffect(() => {
          setSearchFilteredProducts(products);
     }, []);

     const handleSearch = (filteredProducts) => {
          setSearchFilteredProducts(filteredProducts);
     };

     const handleGameFilter = (selectedGames) => {
          const filteredByGame = selectedGames.length === 0 ? searchFilteredProducts : searchFilteredProducts.filter(product => selectedGames.includes(product.game));
          setGameFilteredProducts(filteredByGame);
        };
      
     const handleTypeFilter = (selectedTypes) => {
          const filteredByType = selectedTypes.length === 0 ? searchFilteredProducts : searchFilteredProducts.filter(product => selectedTypes.includes(product.type));
          setTypeFilteredProducts(filteredByType);
     };

     const handlePriceFilter = (selectedPrices) => {
          const filteredByPrice = searchFilteredProducts.filter(product => {
              if (selectedPrices.length === 0) {
                  return true;
              } else {
                  return selectedPrices.some(range => {
                      const [minPrice, maxPrice] = range.split('-').map(parseFloat);
                         if (range === '50+') {
                              return product.price >= 50;
                         } 
                         else if (range === '0-10') {
                              return product.price >= 0 && product.price <= 10;
                         } 
                         else if (range === '10-20') {
                              return product.price >= 10 && product.price <= 20;
                         } 
                         else if (range === '20-30') {
                              return product.price >= 20 && product.price <= 30;
                         } 
                         else if (range === '30-40') {
                              return product.price >= 30 && product.price <= 40;
                         } 
                         else if (range === '40-50') {
                              return product.price >= 40 && product.price <= 50;
                         }
                    });
               }
          });
          setPriceFilteredProducts(filteredByPrice);
     };
        

     const combinedFilteredProducts = searchFilteredProducts.filter(product =>
          (gameFilteredProducts.length === 0 || gameFilteredProducts.includes(product)) &&
          (typeFilteredProducts.length === 0 || typeFilteredProducts.includes(product)) &&
          (priceFilteredProducts.length === 0 || priceFilteredProducts.includes(product))
     );
        
     return (
          <div>
               <div className = "searchbarcontainer">
                    <SearchBar products = {products} onSearch= {handleSearch} />
               </div>
               <div className="shop">
                    <Sidebar onGameFilterChange={handleGameFilter} onTypeFilterChange={handleTypeFilter} onPriceFilterChange={handlePriceFilter}/>
                    <ProductList products={combinedFilteredProducts.length > 0 ? combinedFilteredProducts : searchFilteredProducts} />
               </div>
          </div>
     );
}
   
export default Shop;