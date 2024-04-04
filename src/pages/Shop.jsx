import React from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';

function Shop() {
     return (
          <div>
               <div className = "searchbarcontainer">
               <SearchBar />
               </div>
               <Filter />
               <ProductGallery />
          </div>
     );
}
   
export default Shop;