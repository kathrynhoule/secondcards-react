import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Game({ onGameSelectionChange }) {

     const [selectedGames, setSelectedGames] = useState([]);

     const handleOptionChange = (event) => {
          const value = event.target.value;
          setSelectedGames(current => {
               const newSelection = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
               onGameSelectionChange(newSelection);
               return newSelection;
          });
     };

     const options = [
          { value: 'yugioh', label: 'Yu-Gi-Oh! TCG' },
          { value: 'unionarena', label: 'Union Arena' },
          { value: 'pokemon', label: 'Pokemon TCG' },
     ];

     return (
          <div>
               <h3>GAME</h3>
               <Checkbox
                    name="gameOptions"
                    options={options}
                    selectedOptions={selectedGames}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Game;