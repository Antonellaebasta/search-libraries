import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import Loader from '../../Loader';
import { COLORS, DESKTOP } from '../../../constants';
import sortBy from 'lodash/fp/sortBy';
import toLower from 'lodash/fp/toLower';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media ${DESKTOP} {
    width: 58%;
  }
`;

const Page = styled.span`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: ${props => (props.active ? COLORS.YELLOW : COLORS.GREY)};
  color: ${COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.YELLOW};
  }
`;

const NoResultsMsg = styled.p`
  font-size: 18px;
  color: ${COLORS.BROWN};
`;

class LibrariesList extends React.Component {
  state = {
    currentPage: this.props.currentPage
  };

  componentDidMount() {
    this.props.fetchItems();
  }

  sortedList = (l, f) => sortBy(f)(l);

  changePage = p => {
    this.setState(function(prevState, props) {
      if (prevState !== p) {
        props.setPage(p);
        return { currentPage: p };
      }
    });
  };

  render() {
    const {
      itemsList: { loading, libraries },
      activeFilter,
      currentPage
    } = this.props;

    const hasLibraries = libraries && libraries.length > 0;
    const sortedList = this.sortedList(libraries, toLower(activeFilter));
    const pages =
      hasLibraries && [...Array(libraries.length).keys()].map(x => x + 1);

    return (
      <ListWrapper>
        {loading && <Loader />}
        {hasLibraries &&
          sortedList.map((l, i) => (
            <Card
              key={i}
              name={l.name}
              homepage={l.homepage}
              description={l.description}
              stars={l.stars}
            />
          ))}
        {!loading &&
          !hasLibraries && <NoResultsMsg>Sorry, 0 Results!</NoResultsMsg>}
        <Pagination>
          {hasLibraries &&
            pages.map(l => (
              <Page
                key={l}
                active={l === currentPage}
                onClick={() => this.changePage(l)}
              >
                {l}
              </Page>
            ))}
        </Pagination>
      </ListWrapper>
    );
  }
}

LibrariesList.propTypes = {
  itemsList: PropTypes.shape({
    libraries: PropTypes.array,
    loading: PropTypes.bool
  }).isRequired,
  fetchItems: PropTypes.func.isRequired,
  setPage: PropTypes.func,
  currentPage: PropTypes.number.isRequired
};

LibrariesList.defaultProps = {
  itemsList: {},
  setPage: () => {}
};

export default LibrariesList;
