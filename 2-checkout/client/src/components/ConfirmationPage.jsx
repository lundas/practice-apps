import React from 'react';

const ConfirmationPage = ({ formData, purchase }) => (
  <div id="confirmation-page" hidden>
    <h2>Confirmation Page</h2>
    <div id="confirmation-user">
      <h3>User Information</h3>
      <div>Name: {formData.name}</div>
      <div>Email: {formData.email}</div>
      {/* <div>Password: {formData.password}</div> */}
    </div>
    <div id ="confirmation-shipping">
      <h3>Shipping Information</h3>
      <h4>Address</h4>
      <div>Line 1: {formData.address_line1}</div>
      <div>Line 2: {formData.address_line2}</div>
      <div>City: {formData.city}</div>
      <div>State: {formData.state}</div>
      <div>Zip Code: {formData.zipcode}</div>
    </div>
    <div id="confirmation-payment">
      <h3>Payment Information</h3>
      <div>Credit Card: xxxx-xxxx-xxxx-{formData.ccn ? formData.ccn.slice(-4) : ''}</div>
      <div>Expiration Date: {formData.exp_date}</div>
      <div>CVV: xx{formData.cvv ? formData.cvv.slice(-1) : ''}</div>
      <div>Billing Zip Code: {formData.billing_zipcode}</div>
    </div>
    <button onClick={(e) => {
      purchase(formData);
      document.querySelector('#confirmation-page').hidden = true;
      document.querySelector('#checkout-btn').hidden = false;
      // document.querySelector('#submission-message').hidden = false;
    }}>Submit</button>
  </div>
);


export default ConfirmationPage;