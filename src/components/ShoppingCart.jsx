import React, { useContext } from 'react';
import { products } from '../data/ProductData';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import './ShoppingCart.css';


function ShoppingCart() {
     const { cartItems, getTotalCartAmount } = useContext(ShopContext);
     const totalAmount = getTotalCartAmount();

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
               <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button>Continue Shopping</button>
                    <button>Checkout</button>
               </div>
          </div>
     );
}
   
export default ShoppingCart;