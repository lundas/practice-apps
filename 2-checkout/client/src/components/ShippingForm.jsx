import React from 'react';

const ShippingForm = ({ formData, setFormData }) => (
  <div id="shipping-form" hidden>
    <h2>Shipping Form</h2>
    <form>
      <label className="form-label" htmlFor="address-line-1-text">Address Line 1:</label>
      <input className="form-input shipping" type="text" id="address-line-1-text" ></input>
      <label className="form-label" htmlFor="address-line-2-text">Address Line 2:</label>
      <input className="form-input shipping" type="text" id="address-line-2-text"></input>
      <label className="form-label" htmlFor="city-text">City:</label>
      <input className="form-input shipping" type="text" id="city-text" ></input>
      <label className="form-label" htmlFor="state-text">State:</label>
      <input className="form-input shipping" type="text" id="state-text" ></input>
      <label className="form-label" htmlFor="zipcode-text">Zip Code:</label>
      <input className="form-input shipping" type="text" id="zipcode-text" ></input>
      <label className="form-label" htmlFor="phone-text">Phone #:</label>
      <input className="form-input shipping" type="tel" id="phone-text" ></input>
      <button className="form-button" onClick={(e) => {
        e.preventDefault();
        const domNodes = document.querySelectorAll('input.shipping');
        const shipFormData = {
          address_line1: domNodes[0].value,
          address_line2: domNodes[1].value,
          city: domNodes[2].value,
          state: domNodes[3].value,
          zipcode: domNodes[4].value,
          phone: domNodes[5].value,
        }

        Object.assign(shipFormData, formData);
        setFormData(shipFormData);

        document.querySelector('#shipping-form').hidden = true;
        document.querySelector('#payment-form').hidden = false;
      }}>Next</button>
    </form>
  </div>
);


export default ShippingForm;