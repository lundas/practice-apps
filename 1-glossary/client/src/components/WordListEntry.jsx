import React from "react";


const WordListEntry = ({word, updateWord, deleteWord}) => (
  <div>
    <h3 data-word={word.word} contentEditable="false">{word.word}</h3>
    <em>Definition:  </em>
    <p data-word={word.word} contentEditable="false">{word.definition}</p>
    <button className={`${word.word} edit`} onClick={(e) => {
      var submitHidden = document.querySelector(`button.${word.word}.submit`).hidden;
      const domNodes = document.querySelectorAll(`[data-word="${word.word}"`);
      domNodes.forEach((node) => node.contentEditable = submitHidden);
      document.querySelector(`button.${word.word}.submit`).hidden = !submitHidden;
    }}>edit</button>
    <button className={`${word.word} delete`} onClick={(e) => {
      deleteWord(word)
        .then(()=>{
          console.log(`${word.word} deleted`);
        })
        .catch((err) => {
          console.log(`Error deleting ${word.word}:`, err);
        })
    }}>delete</button>
    <button className={`${word.word} submit`} hidden onClick={(e) => {
      const domNodes = document.querySelectorAll(`[data-word="${word.word}"`);

      const wordObj = {
        _id: word._id,
        word: domNodes.item(0).innerText,
        definition: domNodes.item(1).innerText
      }

      updateWord(wordObj)
        .then(() => console.log(`${word.word} updated`))
        .catch((err) =>  console.log(`Error updating ${word.word}`, err));

      e.target.hidden = true;
    }}>submit</button>
  </div>
)


export default WordListEntry;