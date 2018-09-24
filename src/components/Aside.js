import React from "react";
import styled from "styled-components";
import { DESKTOP, COLORS } from "../constants";

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: content;
  align-items: center;
  justify-content: center;
  color: ${COLORS.PURPLE};
  text-align: center;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / span 2;

    @media ${DESKTOP} {
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }
`;

const Aside = () => (
  <Wrapper>
    <h3>Sponsors (become one):</h3>
  </Wrapper>
);

export default Aside;
