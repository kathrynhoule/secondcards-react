import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
     return (
     <div className = "productcard">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="productprice">Price: ${product.price}</p>
          <button className ="addtocartbttn">Add to Cart</button>
     </div>
);
}

export default ProductCard;