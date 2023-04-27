import React from "react";


const WordListEntry = ({word, updateWord, deleteWord}) => (
  <div>
    <h3 data-word={word.word} contentEditable="false">{word.word}</h3>
    <em>Definition:  </em>
    <p data-word={word.word} contentEditable="false">{word.definition}</p>
    <button value="edit" onClick={(e) => {
      const domNodes = document.querySelectorAll(`[data-word="${word.word}"`);
      domNodes.forEach((node) => node.contentEditable = true);
      document.querySelector(`button.${word.word}`).hidden = false;
    }}>edit</button>
    <button value="delete" onClick={(e) => {
      deleteWord(word)
        .then(()=>{
          console.log(`${word.word} deleted`);
        })
        .catch((err) => {
          console.log(`Error deleting ${word.word}:`, err);
        })
    }}>delete</button>
    <button className={`${word.word} submit`} value="submit" hidden onClick={(e) => {
      const domNodes = document.querySelectorAll(`[data-word="${word.word}"`);
      domNodes.forEach((node) => {
        node.contentEditable = false;
        console.log(node.innerText);
      })
      e.target.hidden = true;
    }}>submit</button>
  </div>
)


export default WordListEntry;