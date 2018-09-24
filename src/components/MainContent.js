import React from "react";
import styled from "styled-components";
import { DESKTOP } from "../constants";

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: content;
  align-items: center;
  justify-content: center;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / span 2;

    @media ${DESKTOP} {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
`;

const MainContent = () => <Wrapper>this is main content!</Wrapper>;

export default MainContent;
