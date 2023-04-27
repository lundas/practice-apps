import React from "react";


const AddWords = ({ addWord }) => (
  <div>
    <h3>Add a Word</h3>
    <form>
      <input className="add-word-form" id="add-word-form-word" type="text" placeholder="Word" />
      <input className="add-word-form" id="add-word-form-definition" type="text" placeholder="Definition" />
      <button className="add-word-form submit" onClick={(e) => {
        const word = document.querySelector('#add-word-form-word').value;
        const definition = document.querySelector('#add-word-form-definition').value;
        addWord({ word, definition })
          .then(() => console.log(`${word} added to Glossary`))
          .catch((err) => console.log(`Error adding ${word} to Glossary`, err));
      }}>submit</button>
    </form>
  </div>
)

export default AddWords;