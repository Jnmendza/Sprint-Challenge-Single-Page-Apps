import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
const [character, setCharacter] = useState({name: ''});

const handleInputChange = event => {
  console.log(event.target.value);
  setCharacter({...character, [event.target.name]: event.target.value})
};

  return (
    <section className="search-form">
     <input type="search" placeholder="Search" name="q" />
     <button className="search-btn" type="submit">Search</button>
    </section>
  );
}
