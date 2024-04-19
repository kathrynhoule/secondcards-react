import React, { useContext } from 'react';
import { products } from '../data/ProductData';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';


function ShoppingCart() {
     const { cartItems, getTotalCartAmount } = useContext(ShopContext);
     const totalAmount = getTotalCartAmount();
     const navigate = useNavigate();

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
                    <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                    <button onClick={() => navigate("/checkout")}>Checkout</button>
               </div>
          </div>
     );
}
   
export default ShoppingCart;