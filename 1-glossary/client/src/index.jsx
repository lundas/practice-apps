import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import Search from "./components/Search.jsx";
import AddWords from "./components/AddWords.jsx";
import WordList from "./components/WordList.jsx";

const App = () => {

  const [wordList, setWordList] = useState([]);
  const [filteredWordList, setFilteredWordList] = useState([]);

  const getWords = () => {
    return axios.get('/glossary')
      .then((response) => {
        setWordList(response.data);
        setFilteredWordList(response.data);
      })
  }

  const addWord = (data) => {
    return axios.post('/glossary', data)
      .then(() => {
        getWords();
      });
  }

  const updateWord = (data) => {
    // TODO: refactor to work with _id
    return axios.put('/glossary', data)
      .then(() => {
        getWords();
      });
  }

  const deleteWord = (data) => {
    return axios.delete('/glossary', { data })
      .then(()=>{
        getWords();
      });
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
    if (!ignore) {
      getWords();
    }
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
