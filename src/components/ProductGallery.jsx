import React from 'react';
import './ProductGallery.css';
import ghostrickalucard from '../cards/ghostrickalucard.png';
import ghostrickfestival from '../cards/ghostrickfestival.png';
import illumi from '../cards/illumi.png';
import machi from '../cards/machi.png';
import milotic from '../cards/milotic.png';
import rayquaza from '../cards/rayquaza.png';
import rotom from '../cards/rotom.png';
import shaymin from '../cards/shaymin.png';
import darklordmorningstar from '../cards/darklordmorningstar.png';

const ProductGallery = () => {
    const images = [
     ghostrickalucard, 
     ghostrickfestival, 
     illumi,
     machi,
     milotic,
     rayquaza,
     rotom,
     shaymin,
     darklordmorningstar,
];

    return (
     <div className="background">
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`${index + 1}`} />
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProductGallery;