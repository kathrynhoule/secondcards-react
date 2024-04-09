import React from 'react';
import './Products.css';

const Product = ({ product }) => (
     <div>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Product Type: {product.producttype}</p>
          <p>Game: {product.game}</p>
          <p>Rarity: {product.rarity}</p>
          <p>Price: ${product.price}</p>
     </div>
);

export default Product;