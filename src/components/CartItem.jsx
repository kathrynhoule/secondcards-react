import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = ({ data }) => {
     const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
     return (
          <div className = "cartItem">
               <img src={data.image} alt={data.name} />
               <div className="description">
                    <p>{data.name}</p>
                    <p>${data.price}</p>
                    <div className="countHandler">
                         <button onClick = {() => removeFromCart(data.id)}> - </button>
                         <input value = {cartItems[data.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)}/>
                         <button onClick = {() => addToCart(data.id)}> + </button>
                    </div>
               </div>
          </div>
     )

}

export default CartItem;