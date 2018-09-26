import React from 'react';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../constants';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  color: ${COLORS.PURPLE};
  padding: 0 10px;

  @media ${DESKTOP} {
    flex-basis: 30%;
  }
  /* End fallback */

  @supports (display: grid) {
    grid-column: 2 / 3;

    @media ${DESKTOP} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;

const Aside = () => (
  <Wrapper>
    <h3>Space for the Sponsors</h3>
    <p>Be the first!</p>
  </Wrapper>
);

export default Aside;
