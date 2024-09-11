import React, { useContext } from 'react';
import './ProductCard.css';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({product}) => {
     const { addToCart, cartItems } = useContext(ShopContext);

     const cartItemAmount = cartItems[product.id];

     return (
     <div className = "productcard">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="productprice">Price: ${product.price}</p>
          <button className ="addtocartbttn" onClick={() => addToCart(product.id)}>
               Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
     </div>
);
}

export default ProductCard;