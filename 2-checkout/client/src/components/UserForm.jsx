import React from 'react';

const UserForm = ({ formData, setFormData }) => (
  <div id="user-form" hidden>
    <h2>User Form</h2>
    <form>
      <label className="form-label" htmlFor="name-text">Name:</label>
      <input className="form-input user" type="text" id="name-text"></input>
      <label className="form-label" htmlFor="email-text">Email:</label>
      <input className="form-input user" type="email" id="email-text"></input>
      <label className="form-label" htmlFor="password-text">Password:</label>
      <input className="form-input user" type="password" id="password-text"></input>
      <button className="form-button" onClick={(e)=>{
        e.preventDefault();
        const domNodes = document.querySelectorAll('input.user');
        const userFormData = {
          name: domNodes[0].value,
          email: domNodes[1].value,
          password: domNodes[2].value
        }
        setFormData(userFormData);
        document.querySelector('#user-form').hidden = true;
        document.querySelector('#shipping-form').hidden = false;
      }}>Next</button>
    </form>
  </div>
);

export default UserForm;