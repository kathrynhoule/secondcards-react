import React from 'react';
import './Sidebar.css';
import Game from './Game';
import Category from './Category';
import Price from './Price';
import Rarity from './Rarity';
import ReleaseDate from './ReleaseDate';

function Sidebar() {
     return (
          <section className="sidebar">
               <Game />
               <Category />
               <Price />
               <Rarity />
               <ReleaseDate />
          </section>
        );
}
   
export default Sidebar;