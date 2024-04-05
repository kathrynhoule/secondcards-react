import React from 'react';
import './Header.css';
import hamburgermenu from '../icons/hamburgermenu.png';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";

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
                   <li id="cart"><Link to="/cart">CART</Link></li>
                   <li id="request"><Link to="/contact">CONTACT</Link></li>
                   <li id="account"><Link to="/account">ACCOUNT</Link></li>
               </ul>
               <img id="hamburger-menu" src={hamburgermenu} alt="click to open menu" width="40" height="40" />
          </nav>
      </div>
  );
};

export default Header;