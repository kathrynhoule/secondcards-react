import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';
import '../components/SearchBar.css';
import {products} from '../data/ProductData';
//import ProductList from '../components/ProductList';

// function Shop() {

//      const [filteredProducts, setFilteredProducts] = useState([]);

//      const handleSearch = (filteredProducts) => {
//           setFilteredProducts(filteredProducts);
//      };

//      return (
//           <div>
//                <div className = "searchbarcontainer">
//                <SearchBar products = {products} onSearch= {handleSearch} />
//                <div>
//                <ul>
//                     {filteredProducts.map((product) => (
//                     <li key={product.id}>{product.name}</li>
//                     ))}
//                </ul>
//                </div>
//                </div>
//                <Filter />
//                <ProductGallery />
//           </div>
//      );
// }
   
// export default Shop;

function Shop() {
     return (
                    <div>
                         <div className = "searchbarcontainer">
                         </div>
                         <div>
                         <ul>
                              {filteredProducts.map((product) => (
                              <li key={product.id}>{product.name}</li>
                              ))}
                         </ul>
                         </div>
                         <Filter />
                         <ProductGallery />
                    </div>
               );
          }