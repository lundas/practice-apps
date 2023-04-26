import React from "react";


const WordListEntry = ({word, updateWord, deleteWord}) => (
  <div>
    <h3>{word.word}</h3>
    <p><em>Definition:</em> {word.definition}</p>
    <button value="edit">edit</button>
    <button value="delete">delete</button>
  </div>
)


export default WordListEntry;