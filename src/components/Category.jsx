import React, { useState } from 'react';
import RadioButtons from './RadioButton';

function Category() {

     const [chosenOption, setChosenOption] = useState('option1');
        
     const handleOptionChange = (event) => {
            setChosenOption(event.target.value);
     };

     const options = [
          { value: 'All', label: 'All' },
          { value: 'singles', label: 'Singles' },
          { value: 'packs', label: 'Packs' },
          { value: 'boxes', label: 'Boxes' },
     ];

     return (
          <div>
               <h3>CATEGORY</h3>
               <RadioButtons
                    name="myOptions"
                    options={options}
                    selectedOption={chosenOption}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Category;