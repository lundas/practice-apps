import React from 'react';

const PaymentForm = (props) => (
  <div id="payment-form" hidden>
    <h2>Payment Form</h2>
    <form>
      <label className="form-label" htmlFor="ccn-text">Credit Card #:</label>
      <input type="text" id="ccn-text" required />
      <label htmlFor="exp-text">Expiration Date:</label>
      <input type="month" id="exp-text" required />
      <label className="form-label" htmlFor="cvv-text">CVV</label>
      <input type="text" id="cvv-text" />
      <label className="form-label" htmlFor="billing-zip-text">Billing Zip Code:</label>
      <input type="text" id="billing-zip-text" />
      <button className="form-button" onClick={(e)=>{
        e.preventDefault();
        document.querySelector('#payment-form').hidden = true;
        document.querySelector('#confirmation-page').hidden = false;
      }}>Next</button>
    </form>
  </div>
);

export default PaymentForm;