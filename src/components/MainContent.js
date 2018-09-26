import React from 'react';
import styled from 'styled-components';
import { DESKTOP } from '../constants';
import Search from './Search/containers/Search';
import LibrariesList from './LibrariesList/containers/LibrariesList';
import Filters from './Filters/containers/Filters';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: 60%;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    @media ${DESKTOP} {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }
`;

const MainContent = () => (
  <Wrapper>
    <Search />
    <Filters />
    <LibrariesList />
  </Wrapper>
);

export default MainContent;
