import React, { useState } from 'react';
import RadioButtons from './RadioButton';

function Game() {

     const [chosenOption, setChosenOption] = useState('option1');
        
     const handleOptionChange = (event) => {
            setChosenOption(event.target.value);
     };

     const options = [
          { value: 'yugioh', label: 'Yu-Gi-Oh! TCG' },
          { value: 'unionarena', label: 'Union Arena' },
          { value: 'pokemon', label: 'Pokemon TCG' },
     ];

     return (
          <div>
               <h3>Game</h3>
               <RadioButtons
                    name="myOptions"
                    options={options}
                    selectedOption={chosenOption}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Game;