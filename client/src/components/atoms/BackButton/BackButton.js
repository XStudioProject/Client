import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLastLocation } from 'react-router-last-location';
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcon } from 'assets/images/back.svg';

const StyledLink = styled(Link)`
  width: 8px;
  height: 16px;
  justify-self: flex-start;
  position: absolute;
  left: 16px;
  cursor: pointer;
  display: ${({ location }) => (location === '/' ? 'none' : 'block')};
`;

const StyledBackButton = styled(BackIcon)`
  width: 100%;
  height: 100%;
`;

const BackButton = ({ location }) => {
  const lastLocation = useLastLocation();

  return (
    <StyledLink location={location} to={lastLocation || '/'}>
      <StyledBackButton />
    </StyledLink>
  );
};

BackButton.propTypes = {
  location: PropTypes.string,
};

export default BackButton;
