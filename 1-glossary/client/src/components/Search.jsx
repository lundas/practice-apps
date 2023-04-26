import React from "react";
import { useState } from "react"


const Search = ({search}) => {
  const [term, setTerm] = useState('');

  return (
  <div>
    <input type="search" value={term} onChange={(e) => {
      setTerm(e.target.value);
      search(e.target.value);
    }}/>
  </div>
)}



export default Search;