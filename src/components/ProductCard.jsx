import React, { useContext } from 'react';
import './ProductCard.css';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({product}) => {
     const { addToCart } = useContext(ShopContext);

     return (
     <div className = "productcard">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="productprice">Price: ${product.price}</p>
          <button className ="addtocartbttn" onClick={() => addToCart(id)}>Add to Cart</button>
     </div>
);
}

export default ProductCard;