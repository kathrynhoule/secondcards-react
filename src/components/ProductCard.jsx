import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
     return (
     <div className = "productcard">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Product Type: {product.producttype}</p>
          <p>Rarity: {product.rarity}</p>
          <p className="productprice">Price: ${product.price}</p>
     </div>
);
}

export default ProductCard;