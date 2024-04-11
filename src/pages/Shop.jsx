import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
import ProductList from '../components/ProductList';

function Shop() {

     const [filteredProducts, setFilteredProducts] = useState([]);

     useEffect(() => {
          setFilteredProducts(products);
     }, []);

     const handleSearch = (filteredProducts) => {
          setFilteredProducts(filteredProducts);
     };

     return (
          <div>
               <div className = "searchbarcontainer">
               <SearchBar products = {products} onSearch= {handleSearch} />
               </div>
               <div>
               <Filter />
               <ProductList products={filteredProducts} />
               </div>
          </div>
     );
}
   
export default Shop;