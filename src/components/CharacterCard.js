import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: pink;
  
  
`;


const CharacterCard = props => {
  return (
    <Card>
      <img src={props.image} alt="character" />
      <h1>{props.name}</h1>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
    </Card>
  )
}

export default CharacterCard;
