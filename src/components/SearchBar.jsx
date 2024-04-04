import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar () {
     const [searchInput, setSearchInput] = useState('');

     const handleSearchChange = (e) => {
          setSearchInput(e.target.value);
        };

     return (
          ""
     );
}

export default SearchBar;