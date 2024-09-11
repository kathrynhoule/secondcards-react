import React from 'react';
import './Sidebar.css';
import Game from './Game';
import Type from './Type';
import Price from './Price';
// import Rarity from './Rarity';
// import ReleaseDate from './ReleaseDate';

function Sidebar({ onGameFilterChange,  onTypeFilterChange, onPriceFilterChange}) {
     return (
          <section className="sidebar">
               <Game onGameSelectionChange={onGameFilterChange} />
               <Type onTypeSelectionChange={onTypeFilterChange} />
               <Price onPriceSelectionChange={onPriceFilterChange}/>
          </section>
     );
}
   
export default Sidebar;