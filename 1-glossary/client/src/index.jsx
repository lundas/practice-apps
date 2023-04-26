import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import Search from "./components/Search.jsx";
import AddWords from "./components/AddWords.jsx";
import WordList from "./components/WordList.jsx";

const App = () => {

  const [wordList, setWordList] = useState([]);
  const [filteredWordList, setFilteredWordList] = useState(['what']);

  const getWords = () => {
    return axios.get('/glossary')
  }

  const addWord = (data) => {
    return axios.post('/glossary', data);
  }

  const updateWord = (data) => {
    return axios.put('/glossary', data);
  }

  const deleteWord = (data) => {
    return axios.delete('/glossary', data);
  }

  const search = (term) => {
    if (!term) {
      setFilteredWordList(wordList);
    } else {
      const newFWL = wordList.filter((word) => {
        return word.word.includes(term);
      });
      setFilteredWordList(newFWL);
    }
  }

  useEffect(() => {
    let ignore = false;
    getWords()
      .then((response) => {
        if (!ignore) {
          setWordList(response.data)
          setFilteredWordList(response.data);
        }
      })
      .catch((err) => {
        console.log('Axios GET error: ', err);
      });
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <header>
        <h1>Glossary</h1>
      </header>
      <Search search={search}/>
      <AddWords addWord={addWord}/>
      <h2>Word List</h2>
      <WordList filteredWordList={filteredWordList} updateWord={updateWord} deleteWord={deleteWord}/>
    </>
  )
}



render(
  <App />,
  document.getElementById("root")
);
