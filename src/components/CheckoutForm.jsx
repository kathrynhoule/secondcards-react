import React, { useState } from 'react';
import './CheckoutForm.css';

function CheckoutForm() {
     const [formData, setFormData] = useState({ name: '', email: ''});
      
     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({ ...prevState, [name]: value }));
     };
     
     const handleSubmit = (e) => {
          e.preventDefault();
     };
      
     return (
          <div className="checkoutform">
          <h3>Shipping</h3>
          <form onSubmit={handleSubmit}>
               <div>
               <label>
               Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
               </label>
               </div>
               <div>
               <label>
               Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
               </label>
               </div>
               <button type="submit">Submit</button>
          </form>
          <h3>Payment & Billing</h3>
          <h3>Review & Place Order</h3>
          </div>
     );
}
   
export default CheckoutForm;