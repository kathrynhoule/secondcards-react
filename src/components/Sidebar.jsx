import React from 'react';
import './Sidebar.css';
import Game from './Game';
// import Category from './Category';
// import Price from './Price';
// import Rarity from './Rarity';
// import ReleaseDate from './ReleaseDate';

function Sidebar({ onGameFilterChange }) {
     return (
          <section className="sidebar">
               <Game onGameSelectionChange={onGameFilterChange} />
          </section>
     );
}
   
export default Sidebar;