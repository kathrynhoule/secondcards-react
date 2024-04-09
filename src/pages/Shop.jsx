import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
import ProductList from '../components/ProductList';

function Shop() {

     const [filteredProducts, setFilteredProducts] = useState([]);

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