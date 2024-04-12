import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Game() {

     const [chosenOption, setChosenOption] = useState('allgame');
        
     const handleOptionChange = (event) => {
            setChosenOption(event.target.value);
     };

     const options = [
          { value: 'allgame', label: 'All' },
          { value: 'yugioh', label: 'Yu-Gi-Oh! TCG' },
          { value: 'unionarena', label: 'Union Arena' },
          { value: 'pokemon', label: 'Pokemon TCG' },
     ];

     return (
          <div>
               <h3>GAME</h3>
               <Checkbox
                    name="myOptions"
                    options={options}
                    chosenOption={chosenOption}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Game;