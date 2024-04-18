import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = ({ data }) => {
     const { cartItems } = useContext(ShopContext);
     return (
          <div className = "cartItem">
            <img src={data.image} alt={data.name} />
            <div className="description">
                <p>{data.name}</p>
                <p>${data.price}</p>
                    <div className="countHandler">
                         <button> - </button>
                         <input value = {cartItems[data.id]} />
                         <button> + </button>
                    </div>
            </div>
        </div>
     )

}

export default CartItem;