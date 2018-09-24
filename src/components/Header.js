import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
//import logo from '../../logo.svg';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: content;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.YELLOW};
  //border-bottom: 10px ${COLORS.BLUE};
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / span 2;
    grid-row: 1;
    text-align: center;
  }
`;

const Title = styled.span`
  color: ${COLORS.BROWN};
`;

const Header = () => (
  <Wrapper>
    <Title>
      <h1>Modules Search</h1>
      <h4>Powered by libraries.io</h4>
    </Title>
  </Wrapper>
);

export default Header;
