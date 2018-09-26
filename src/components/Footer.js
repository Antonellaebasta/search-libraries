import React from 'react';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../constants';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.YELLOW};
  color: ${COLORS.BROWN};
  text-align: center;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / 4;
    grid-row: 4 / 5;

    @media ${DESKTOP} {
      grid-row: 3 / 4;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <h3>Just a simple footer</h3>
  </Wrapper>
);

export default Footer;
