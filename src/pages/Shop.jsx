import React from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';

function Shop() {
     return (
          <div>
               <div className = "searchbarcontainer">
               <SearchBar products = {products} />
               </div>
               <Filter />
               <ProductGallery />
          </div>
     );
}
   
export default Shop;