import React from 'react';
import instagram from './icons/instagram.png';
import twitter from './icons/twitter.png';
import hamburgermenu from './icons/hamburgermenu.png';

function Navigation() {
  return (
    <nav>
               <ul id="mainlist">
                   <li id="about">About</li>
                   <li id="shop">Shop</li>
                   <li id="cart">Cart</li>
                   <li id="request">Request</li>
                   <li><img src={instagram} alt="instagram" width="50" height="50" /></li>
                   <li><img src={twitter} alt="twitter" width="45" height="45" /></li>
               </ul>
               <img id="hamburger-menu" src={hamburgermenu} alt="click to open menu" width="40" height="40" />
     </nav>
  );
}

export default Navigation;