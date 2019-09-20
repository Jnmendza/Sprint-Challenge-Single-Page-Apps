import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";

const CharacterCard = props => {
  return (
    <>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
    </>
  )
}

export default CharacterCard;
