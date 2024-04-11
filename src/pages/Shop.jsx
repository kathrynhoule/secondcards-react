import React, { useState, useEffect } from 'react';
import './Shop.css';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

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
               <div className="shop">
               <Sidebar />
               <ProductList products={filteredProducts} />
               </div>
          </div>
     );
}
   
export default Shop;