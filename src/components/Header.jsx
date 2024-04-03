import React from 'react';
import './Header.css';
import hamburgermenu from '../icons/hamburgermenu.png';

const Header = () => {
  return (
      <div className="header">
          <div>
          <h1>SECOND CARDS</h1>
          </div>
          <nav>
          <ul id="navbarlist">
                   <li id="about"><a href="">ABOUT</a></li>
                   <li id="shop"><a href="">SHOP</a></li>
                   <li id="cart"><a href="">CART</a></li>
                   <li id="request"><a href="">REQUEST</a></li>
               </ul>
               <img id="hamburger-menu" src={hamburgermenu} alt="click to open menu" width="40" height="40" />
          </nav>
      </div>
  );
};

export default Header;