import React from 'react';

const UserForm = (props) => (
  <div id="user-form" hidden>
    <h2>User Form</h2>
    <form>
      <label className="form-label" htmlFor="name-text">Name:</label>
      <input type="text" id="name-text" required></input>
      <label className="form-label" htmlFor="email-text">Email:</label>
      <input type="email" id="email-text" required></input>
      <label className="form-label" htmlFor="password-text">Password:</label>
      <input type="password" id="password-text" required></input>
      <button className="form-button" onClick={(e)=>{
        e.preventDefault();
        document.querySelector('#user-form').hidden = true;
        document.querySelector('#shipping-form').hidden = false;
      }}>Next</button>
    </form>
  </div>
);

export default UserForm;