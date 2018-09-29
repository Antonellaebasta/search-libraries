import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Aside from './components/Aside';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { DESKTOP } from './constants';
import './App.css';

const MainWrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  /* End fallback */

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: 100px 100px minmax(300px, 1fr) 60px;
    grid-gap: 5px;
    justify-self: stretch;
    justify-items: stretch;
    justify-content: center;
    align-content: stretch;
    grid-auto-flow: column;
    grid-auto-flow: row dense;

    @media ${DESKTOP} {
      grid-template-columns: 30% 1fr;
      grid-template-rows: 180px minmax(360px, auto) 100px;
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
