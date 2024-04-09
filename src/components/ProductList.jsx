import React from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
     return (
       <div className="gallery">
         {products.map((product) => (
           <ProductCard key={product.id} product={product} />
         ))}
       </div>
     );
   };

export default ProductList;

