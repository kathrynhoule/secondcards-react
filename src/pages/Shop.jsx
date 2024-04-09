import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
import ProductCard from '../components/ProductCard';

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
               <div className="productlist">
                    {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
               </div>
               </div>
               <ProductGallery />
          </div>
     );
}
   
export default Shop;