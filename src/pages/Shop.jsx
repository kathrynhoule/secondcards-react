//import Header from '../components/Header';
import React from 'react';
import arrow from '../icons/arrow.png';

function Filter() {
     return <main>
        <ul id="sublist">
                  <li id="singles"><a href="">Singles</a></li>
                  <li id="packs"><a href="">Packs</a></li>
                  <li id="boxes"><a href="">Boxes</a></li>
                  <li id="all"><a href="">All</a></li>
              </ul>
              <div class="dropdown"><p>Filter by</p> <img id="arrow" src={arrow} alt="click to open menu" width="20" height="20" />
              </div>
              <div class="search"><p>search...</p></div>
             
              <hr />
   
              <ul id="lastlist">
                  <li>Filter by:</li>
                  <li>Series</li>
                  <li>Rarity</li>
                  <li>Release Date</li>
              </ul>
     </main>;
   }
   
   export default Filter;