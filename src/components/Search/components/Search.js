import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants';

const InputSearch = styled.input`
  outline: none;
  border: none;
  width: 100%;
  color: ${COLORS.PURPLE};
  font-size: 14px;
  padding: 10px 8px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: 1px solid ${COLORS.PURPLE};
`;

class Search extends React.Component {
  state = {
    search: this.props.currentSearch
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState(function(prevState, props) {
      if (prevState !== value) {
        props.setSearch(value);
        return { search: value };
      }
    });
  };

  render() {
    return (
      <InputSearch
        placeholder="Search..."
        onChange={e => this.handleInputChange(e)}
      />
    );
  }
}

Search.propTypes = {
  currentSearch: PropTypes.string,
  setSearch: PropTypes.func
};

Search.defaultProps = {
  currentSearch: '',
  setSearch: () => {}
};

export default Search;
