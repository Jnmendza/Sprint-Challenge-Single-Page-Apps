import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
    const [characterState, setCharacterState] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      const CharArray = res.data.results;
      setCharacterState(CharArray)
    })
    .catch(error => {console.log("This is an error", error)})
  }, []);

  return (
    <Container className="character-list">
      {characterState.map((item, key) => (
        <div>
          <CharacterCard 
            key={key}
            name={item.name}
            image={item.image}
            status={item.status}
            gender={item.gender}
          />
        </div>
      ))}
    </Container>
  );
}

export default CharacterList;
