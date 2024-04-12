import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Category() {

     const [chosenOption, setChosenOption] = useState('allcategory');
        
     const handleOptionChange = (event) => {
            setChosenOption(event.target.value);
     };

     const options = [
          { value: 'allcategory', label: 'All' },
          { value: 'singles', label: 'Singles' },
          { value: 'packs', label: 'Packs' },
          { value: 'boxes', label: 'Boxes' },
     ];

     return (
          <div>
               <h3>CATEGORY</h3>
               <Checkbox
                    name="myOptions"
                    options={options}
                    chosenOption={chosenOption}
                    onChange={handleOptionChange}
               />
          </div>
        );
}
   
export default Category;