import React from "react";

const CartItem = ({ data }) => {
     return (
          <div className = "cartItem">
            <img src={data.image} alt={data.name} />
            <div className="description">
                <p>{data.name}</p>
                <p>${data.price}</p>
                    <div className="countHandler">
                         <button> - </button>
                         <input />
                         <button> + </button>
                    </div>
            </div>
        </div>
     )

}

export default CartItem;