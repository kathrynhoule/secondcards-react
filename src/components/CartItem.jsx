import React from "react";

const CartItem = (product) => {
     return (
          <div className = "cartItem">
          <img src={product.image} alt={product.name} />
               <div className="description">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
               </div>
          </div>
     )

}

export default CartItem;