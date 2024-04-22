import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
  return (
      <div className="header">
          <div>
          <h1><Link to="/">SECOND CARDS</Link></h1>
          </div>
          <nav>
          <ul id="navbarlist">
                   <li id="about"><Link to="/about">ABOUT</Link></li>
                   <li id="shop"><Link to="/shop">SHOP</Link></li>
                   <li id="cart"><Link to="/cart"><FaShoppingCart />CART</Link></li>
                   <li id="account"><Link to="/account">ACCOUNT</Link></li>
               </ul>
               <GiHamburgerMenu id="hamburger-menu" size={32} alt="click to open menu" />
          </nav>
      </div>
  );
};

export default Header;