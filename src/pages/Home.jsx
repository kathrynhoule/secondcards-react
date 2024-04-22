import React from 'react';
import './Home.css';
import homepageplaceholder from '../productimages/homepageplaceholder.png';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Home() {
     return (
          <div className="home">
               <div className="container">
                    <div className="column column1">
                    <FaInstagram className="socialicon" id="instagram" size={32} />
                    <FaTwitter className="socialicon" id="twitter" size={32} />
                    <FaTwitch className="socialicon" id="twitch" size={32} />
                    <MdMail className="socialicon" id="email" size={32} />
                    </div>
                    <div className="column column2">
                    <h1>Second Cards</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                         in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                         nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                         sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    </div>
                    <div className="column column3">
                    <img src= {homepageplaceholder} alt="" />
                    </div>
               </div>
          </div>
     );
}
   
export default Home;