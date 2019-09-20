import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const HeaderContainer = styled.header`
  background: yellow;
`;

export default function Header() {
  return (
    <HeaderContainer className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </HeaderContainer>
  );
}
