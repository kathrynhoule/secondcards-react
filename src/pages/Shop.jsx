import React from 'react';
import Filter from '../components/Filter';
import ProductGallery from '../components/ProductGallery';
import SearchBar from '../components/SearchBar';

function Shop() {
     return (
          <div>
<Filter />
<SearchBar />
<ProductGallery />
</div>
     );
}
   
export default Shop;