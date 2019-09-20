import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.section`
  background: yellow;

`;


export default function WelcomePage() {
  return (
    <PageContainer className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </PageContainer>
  );
}
