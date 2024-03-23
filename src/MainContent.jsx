import React from 'react';
import arrow from './icons/arrow.png';

function MainContent() {
  return <main>
     <ul id="sublist">
               <li id="singles">Singles</li>
               <li id="packs">Packs</li>
               <li id="boxes">Boxes</li>
               <li id="all">All</li>
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

export default MainContent;