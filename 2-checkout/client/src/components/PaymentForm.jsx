import React from 'react';

const PaymentForm = ({ formData, setFormData }) => (
  <div id="payment-form" hidden>
    <h2>Payment Form</h2>
    <form>
      <label className="form-label" htmlFor="ccn-text">Credit Card #:</label>
      <input className="input-form payment"type="text" id="ccn-text" />
      <label htmlFor="exp-text">Expiration Date:</label>
      <input className="input-form payment" type="month" id="exp-text" />
      <label className="form-label" htmlFor="cvv-text">CVV</label>
      <input className="input-form payment"type="text" id="cvv-text" />
      <label className="form-label" htmlFor="billing-zip-text">Billing Zip Code:</label>
      <input className="input-form payment"type="text" id="billing-zip-text" />
      <button className="form-button" onClick={(e) => {
        e.preventDefault();
        const domNodes = document.querySelectorAll('input.payment');
        const payFormData = {
          ccn: domNodes[0].value,
          exp_date: domNodes[1].value,
          cvv: domNodes[2].value,
          billing_zipcode: domNodes[3].value,
        }
        Object.assign(payFormData, formData);
        setFormData(payFormData);
        document.querySelector('#payment-form').hidden = true;
        document.querySelector('#confirmation-page').hidden = false;
      }}>Next</button>
    </form>
  </div>
);

export default PaymentForm;