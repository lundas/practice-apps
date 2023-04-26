import React from "react";
import { render } from "react-dom";
import Search from "./components/Search.jsx";
import AddWords from "./components/AddWords.jsx";
import WordList from "./components/WordList.jsx";

const App = () => {
  return (
    <>
      <header>
        <h1>Glossary</h1>
      </header>
      <div>Search Form goes here</div>
      <div>Add Words Form goes here</div>
      <h2>Word List</h2>
      <div>Word List Goes Here</div>
    </>
  )
}



render(
  <App />,
  document.getElementById("root")
);
