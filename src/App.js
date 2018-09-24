import React, { Component } from 'react';
import './App.css';
import styled, { injectGlobal } from "styled-components";
import Header from "./components/Header";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { DESKTOP } from "./constants";

/*injectGlobal`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-size: 14px;
    font-family: Helvetica;
  }
`;*/
const MainWrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  /* End fallback */

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px minmax(200px, auto) 60px;
    grid-auto-columns: max-content;
    grid-gap: 15px;
    justify-items: stretch;
    justify-content: center;
    align-content: stretch;
    grid-auto-flow: column;

    @media ${DESKTOP} {
      grid-template-columns: 30% 70%;
      grid-template-rows: 180px minmax(200px, auto) 100px;
    }
  }
`;

const App = () => (
    <MainWrapper>
        <Header />
        <Aside />
        <MainContent />
        <Footer />
    </MainWrapper>
);

export default App;
