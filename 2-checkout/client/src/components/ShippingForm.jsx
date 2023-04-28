import React from 'react';

const ShippingForm = (props) => (
  <div id="shipping-form" hidden>
    <h2>Shipping Form</h2>
    <form>
      <label className="form-label" htmlFor="address-line-1-text">Address Line 1:</label>
      <input type="text" id="address-line-1-text" required></input>
      <label className="form-label" htmlFor="address-line-2-text">Address Line 2:</label>
      <input type="text" id="address-line-2-text"></input>
      <label className="form-label" htmlFor="city-text">City:</label>
      <input type="text" id="city-text" required></input>
      <label className="form-label" htmlFor="state-text">State:</label>
      <input type="text" id="state-text" required></input>
      <label className="form-label" htmlFor="zipcode-text">Zip Code:</label>
      <input type="text" id="zipcode-text" required></input>
      <label className="form-label" htmlFor="phone-text">Phone #:</label>
      <input type="tel" id="phone-text" required></input>
      <button className="form-button" onClick={(e) => {
        e.preventDefault();
        document.querySelector('#shipping-form').hidden = true;
        document.querySelector('#payment-form').hidden = false;
      }}>Next</button>
    </form>
  </div>
);


export default ShippingForm;