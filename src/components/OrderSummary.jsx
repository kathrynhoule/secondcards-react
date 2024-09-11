import React from 'react';
import './OrderSummary.css';

function OrderSummary() {
     return (
          <div className="ordersummary">
               <h1>Order Summary</h1>
               <h3>Edit Cart</h3>
               <h3>Items:</h3>
               <h3>Shipping & Handling:</h3>
               <h3>Taxes:</h3>

               <h2>Order Total:</h2>
          </div>
        );
}
   
export default OrderSummary;