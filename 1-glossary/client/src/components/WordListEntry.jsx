import React from "react";


const WordListEntry = ({word, updateWord, deleteWord}) => (
  <div>
    <h3 data-word={word.word}>{word.word}</h3>
    <p><em>Definition:</em> {word.definition}</p>
    <button value="edit">edit</button>
    <button value="delete" onClick={(e) => {
      deleteWord(word)
        .then(()=>{
          console.log(`${word.word} deleted`);
        })
        .catch((err) => {
          console.log(`Error deleting ${word.word}:`, err);
        })
    }}>delete</button>
  </div>
)


export default WordListEntry;