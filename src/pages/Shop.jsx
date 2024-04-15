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

     const combinedFilteredProducts = gameFilteredProducts.filter(product =>
          typeFilteredProducts.includes(product)
     );
        
     return (
          <div>
               <div className = "searchbarcontainer">
                    <SearchBar products = {products} onSearch= {handleSearch} />
               </div>
               <div className="shop">
                    <Sidebar onGameFilterChange={handleGameFilter} onTypeFilterChange={handleTypeFilter}/>
                    <ProductList products={combinedFilteredProducts.length > 0 ? combinedFilteredProducts : searchFilteredProducts} />
               </div>
          </div>
     );
}
   
export default Shop;