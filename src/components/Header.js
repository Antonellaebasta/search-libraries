import React from 'react';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../constants';
//import logo from '../../logo.svg';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  color: ${COLORS.BROWN};
  background-color: ${COLORS.YELLOW};
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / span 3;
    grid-row: 1;

    @media ${DESKTOP} {
      grid-template-columns: 1 / span 2;
    }
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;

  @media ${DESKTOP} {
    font-size: 50px;
  }
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;

  @media ${DESKTOP} {
    font-size: 16px;
  }
`;

const Header = () => (
  <Wrapper>
    <ContentWrapper>
      <Title>Libraries Search</Title>
      <SubTitle>Powered by libraries.io</SubTitle>
    </ContentWrapper>
  </Wrapper>
);

export default Header;
