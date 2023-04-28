import axios from "axios";
import React from "react";
import { render } from "react-dom";
import ConfirmationPage from "./components/ConfirmationPage.jsx";
import PaymentForm from "./components/PaymentForm.jsx";
import ShippingForm from "./components/ShippingForm.jsx";
import UserForm from "./components/UserForm.jsx";


const App = () => {

  const formData = {
    "name": "Andrew",
    "email": "andrew.s.lund@gmail.com",
    "password": "password",
    "address_line1": "1600 Grand Ave",
    "city": "Saint Paul",
    "state": "MN",
    "zipcode": "55105",
    "phone": "6082888226",
    "ccn": "1234 5678 9101 1121",
    "exp_date": "01/2020",
    "cvv": "123",
    "billing_zipcode": "02468"
};

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <UserForm />
      <ShippingForm />
      <PaymentForm />
      <ConfirmationPage formData={formData}/>
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
