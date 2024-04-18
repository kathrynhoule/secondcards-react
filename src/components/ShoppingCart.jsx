import React, { useContext } from 'react';
import { products } from '../data/ProductData';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import './ShoppingCart.css';


function ShoppingCart() {
     const { cartItems } = useContext(ShopContext);

     return (
          <div className="cart">
               <div>
                    <h1>Your Cart Items</h1>
               </div>
               <div className="cartItemsContainer">
                    {products.map ((product) => {
                         if (cartItems[product.id] > 0) {
                              return <CartItem key={product.id} data={product} />;
                          }
                          return null;
                    })}
               </div>
          </div>
     );
}
   
export default ShoppingCart;