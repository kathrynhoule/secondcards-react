import React from 'react';
import './Checkout.css';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  return (
    <div className="checkout">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
}

export default Checkout;