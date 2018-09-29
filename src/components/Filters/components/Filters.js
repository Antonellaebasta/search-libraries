import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LIBRARIES_FILTER } from '../../constants';
import { COLORS } from '../../../constants';
import keys from 'lodash/fp/keys';

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${COLORS.YELLOW};
`;

const Filter = styled.a`
  color: ${COLORS.BROWN};
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  padding: 16px 0;
  text-align: center;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid ${COLORS.BROWN};
  }

  &:hover {
    background-color: ${COLORS.BROWN};
    color: ${COLORS.WHITE};
  }
`;

class Filters extends React.Component {
  render() {
    const { filterBy } = this.props;
    const filters = keys(LIBRARIES_FILTER);

    return (
      <FiltersWrapper>
        {filters.map(f => (
          <Filter
            key={f}
            filter={f}
            onClick={() => filterBy(LIBRARIES_FILTER[f])}
          >
            {LIBRARIES_FILTER[f]}
          </Filter>
        ))}
      </FiltersWrapper>
    );
  }
}

Filters.propTypes = {
  filterBy: PropTypes.func.isRequired
};

export default Filters;
