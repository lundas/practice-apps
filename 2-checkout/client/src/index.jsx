import axios from "axios";
import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import ConfirmationPage from "./components/ConfirmationPage.jsx";
import PaymentForm from "./components/PaymentForm.jsx";
import ShippingForm from "./components/ShippingForm.jsx";
import UserForm from "./components/UserForm.jsx";


const App = () => {

  const [formData, setFormData] = useState({});

  const purchase = (data) => {
    axios.post('/checkout', data)
      .then((response) => {
        console.log('POST request sent');
        console.log('POST response:', response);
      })
      .catch((err) => {
        console.log('Axios POST error:', err);
      })
  }

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <UserForm formData={formData} setFormData={setFormData} />
      <ShippingForm formData={formData} setFormData={setFormData}/>
      <PaymentForm formData={formData} setFormData={setFormData}/>
      <ConfirmationPage formData={formData} purchase={purchase} />
      <div id="submission-message" hidden>Your Order has been Submitted!</div>
      <button id="checkout-btn" onClick={(e)=>{
        e.target.hidden = true;
        document.querySelector('#user-form').hidden = false;
      }}>checkout</button>
    </div>
  )
}



render(
  <App />,
  document.getElementById("root")
);
