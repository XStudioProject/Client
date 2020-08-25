import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as SocialMediaFacebookIcon } from 'assets/images/facebook-3.svg';
import { ReactComponent as SocialMediaLinkedinIcon } from 'assets/images/linkedin.svg';

import Logo from 'components/atoms/Logo/Logo';

const StyledHeader = styled.header`
  width: 100vw;
  height: 56px;
  background: none;
  display: flex;
  justify-content: space-between;
  padding-right: 43px;
  margin-top: 40px;
  padding-left: ${({ location }) => (location === '/' ? '20vw' : 0)};
`;

const StyledSocialMediaIconsContainer = styled.div`
  height: 100%;
  width: auto;
  svg {
    cursor: pointer;

    :first-of-type {
      margin-right: 32px;
    }
    :last-of-type {
      margin-right: 0;
    }
  }
`;

const Header = ({ location }) => (
  <StyledHeader location={location}>
    <Logo />
    <StyledSocialMediaIconsContainer>
      <SocialMediaFacebookIcon />
      <SocialMediaLinkedinIcon />
    </StyledSocialMediaIconsContainer>
  </StyledHeader>
);

Header.propTypes = {
  location: PropTypes.string,
};

export default Header;
