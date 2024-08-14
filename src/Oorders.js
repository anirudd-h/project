import './Oorders.css';
import { auth } from "./firebase";
import { Redirect } from 'react-router-dom';
import Login from './Login';
import React, { useNavigate,useHistory } from 'react';

const OrderConfirmation = () => {
  const user = auth.currentUser; 

  const handleRedirect = () => {
    window.location.href = '/login';
  };
  

    
  if (!user) {
    return(
    <div className='log'>
             <h1>Please Login</h1>

  
    <button className='b' onClick={handleRedirect}>
Login    </button>
      </div>
    )
  }

  return (
    <div className="order-confirmation">
      <div className="content">
        <h2>Thank you, your order has been placed.</h2>
        <p>An email confirmation has been sent to you.</p>
        <p>New! Get shipment notifications on your mobile device with the free Amazon app</p>

        <div className="order-details">
          <p>Order Number: <span className="order-number">107-7214692-XXXXXX</span></p>
          <p>Items will be shipped to You by Amazon.com</p>
          <p>Guaranteed delivery: <span className="delivery-date">In a few days</span></p>
        </div>

        <div className="actions">
          <a href="/" className="action-link">Continue Browsing</a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation
