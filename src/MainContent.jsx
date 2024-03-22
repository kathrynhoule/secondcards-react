import React from 'react';
import arrow from './icons/arrow.png';
import ghostrickalucard from './cards/ghostrickalucard.png';
import ghostrickfestival from './cards/ghostrickfestival.png';
import illumi from './cards/illumi.png';
import machi from './cards/machi.png';
import milotic from './cards/milotic.png';
import rayquaza from './cards/rayquaza.png';
import rotom from './cards/rotom.png';
import shaymin from './cards/shaymin.png';

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

           <div className="container">
               <div className="grid">
                 <div className="cell">
                   <img src={shaymin} alt="card 1" className="responsive-image" />
                   <p>Example Card 1</p>
                 </div>
                 <div className="cell">
                   <img src={milotic} alt="card 2" className="responsive-image" />
                   <p>Example Card 2</p>
                 </div>
                 <div className="cell">
                   <img src={rotom} alt="card 3" cclassName="responsive-image" />
                   <p>Example Card 3</p>
                 </div>
                 <div className="cell">
                    <img src={ghostrickalucard} alt="card 4" className="responsive-image" />
                    <p>Example Card 4</p>
                  </div>
                  <div className="cell">
                    <img src={illumi} alt="card 5" className="responsive-image" />
                    <p>Example Card 5</p>
                  </div>
                  <div className="cell">
                    <img src={machi} alt="card 6" className="responsive-image" />
                    <p>Example Card 6</p>
                  </div>
                  <div className="cell">
                    <img src={rayquaza} alt="card 7" className="responsive-image" />
                    <p>Example Card 7</p>
                  </div>
                  <div className="cell">
                    <img src={ghostrickfestival} alt="card 8" className="responsive-image" />
                    <p>Example Card 8</p>
                  </div>
               </div>
             </div>


  </main>;
}

export default MainContent;