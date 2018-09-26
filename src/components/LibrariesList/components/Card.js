import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;
  transition-delay: 0.01s;
  &:hover {
    transition: translateY(-2px);
    box-shadow: 1px 10px 20px -2px rgba(0, 0, 0, 0.15);
  }
`;

const Name = styled.h3`
  color: ${COLORS.PURPLE};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Link = styled.a`
  color: ${COLORS.YELLOW};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLORS.PURPLE};
  }
`;

const Stars = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 2px 8px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPLE};
  border-radius: 50px;
  height: 100%;
`;

const Description = styled.div`
  font-size: 16px;
  color: ${COLORS.DARK_GREY};
  margin: 20px 0;
`;

const Card = ({ name, homepage, description, stars }) => (
  <Wrapper>
    <Name>{name}</Name>
    <InfoWrapper>
      <Link href={homepage} target="_blank">
        {homepage}
      </Link>
      <Stars>{stars}</Stars>
    </InfoWrapper>
    <Description>{description}</Description>
  </Wrapper>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  homepage: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired
};

Card.defaultProps = {
  homepage: ''
};

export default Card;
