import React, { useContext } from 'react';
import { products } from '../data/ProductData';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';


function ShoppingCart() {
     const cartItems = useContext(ShopContext);

     return (
          <div className="cart">
               <div>
                    <h3>Your Cart Items</h3>
               </div>
               <div className="cartItems">
                    {products.map ((product) => {
                         if(cartItems[product.id] !== 0) {
                              return <CartItem data={product} />
                         }
                    })}
               </div>
          </div>
     );
}
   
export default ShoppingCart;