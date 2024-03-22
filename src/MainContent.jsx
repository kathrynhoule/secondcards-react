import React from 'react';

function MainContent() {
  return <main>
     <ul id="sublist">
               <li id="singles">Singles</li>
               <li id="packs">Packs</li>
               <li id="boxes">Boxes</li>
               <li id="all">All</li>
           </ul>
           <div class="dropdown"><p>Filter by</p> <img id="arrow" src="icons/arrow icon.png" alt="click to open menu" width="20" height="20" />
           </div>
           <div class="search"><p>search...</p></div>
          
           <hr />

           <ul id="lastlist">
               <li>Filter by:</li>
               <li>Series</li>
               <li>Rarity</li>
               <li>Release Date</li>
           </ul>

           <div class="container">
               <div class="grid">
                 <div class="cell">
                   <img src="cards/shaymin promo.png" alt="card 1" class="responsive-image" />
                   <p>Example Card 1</p>
                 </div>
                 <div class="cell">
                   <img src="cards/milotic ultra rare.png" alt="card 2" class="responsive-image" />
                   <p>Example Card 2</p>
                 </div>
                 <div class="cell">
                   <img src="cards/rotom alt art.png" alt="card 3" class="responsive-image" />
                   <p>Example Card 3</p>
                 </div>
                 <div class="cell">
                    <img src="cards/ghostrick alucard.png" alt="card 4" class="responsive-image" />
                    <p>Example Card 4</p>
                  </div>
                  <div class="cell">
                    <img src="cards/union arena illumi.png" alt="card 5" class="responsive-image" />
                    <p>Example Card 5</p>
                  </div>
                  <div class="cell">
                    <img src="cards/hyper battle machi.png" alt="card 6" class="responsive-image" />
                    <p>Example Card 6</p>
                  </div>
                  <div class="cell">
                    <img src="cards/rayquaza ultra rare.png" alt="card 7" class="responsive-image" />
                    <p>Example Card 7</p>
                  </div>
                  <div class="cell">
                    <img src="cards/ghostrick festival.png" alt="card 8" class="responsive-image" />
                    <p>Example Card 8</p>
                  </div>
               </div>
             </div>


  </main>;
}

export default MainContent;