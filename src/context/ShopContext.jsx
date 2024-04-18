import React, { createContext, useState } from 'react';
import products from '../data/ProductData';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
     let cart = {}
     for (let i = 1; i < products.length + 1; i++) {
          cart[i] = 0;
     }
     return cart;
};

export const ShopContextProvider = (props) => {
     const [cartItems, setCartItems] = useState();
     return
          <ShopContext.Provider>
               {props.children}
          </ShopContext.Provider>;
};

