import React from "react";
import WordListEntry from './WordListEntry.jsx';

const WordList = ({ filteredWordList, updateWord, deleteWord }) => (
  <div>
    {filteredWordList.map((word) => {
      // console.log('word _id:', word.word);
      return <WordListEntry key={word._id} word={ word } updateWord={ updateWord } deleteWord={ deleteWord } />
    })}
  </div>
)


export default WordList;