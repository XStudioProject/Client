import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useWindowSize from 'utils/useWindowSize';

import { ReactComponent as SocialMediaFacebookIcon } from 'assets/images/facebook-3.svg';
import { ReactComponent as SocialMediaLinkedinIcon } from 'assets/images/linkedin.svg';
import { ReactComponent as BackIcon } from 'assets/images/back.svg';

import Logo from 'components/atoms/Logo/Logo';

const StyledHeader = styled.header`
  width: 100%;
  max-height: 56px;
  background: none;
  display: flex;
  justify-content: space-between;
  padding-right: 43px;
  margin-top: 40px;
  position: relative;
  padding-left: ${({ location }) => (location === '/' || location === '/register' ? '20vw' : 0)};

  @media (max-width: 1350px) {
    padding-left: ${({ location }) => (location === '/' || location === '/register' ? '10vw' : 0)};
  }

  @media (max-width: 700px) {
    padding: 0;
    justify-content: center;
    align-items: center;
  }
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

const StyledLogo = styled(Logo)`
  justify-self: center;
`;

const StyledBackButton = styled(BackIcon)`
  width: 8px;
  height: 16px;
  border: none;
  cursor: pointer;
  justify-self: flex-start;
  position: absolute;
  left: 16px;

  display: ${({ location }) => (location === '/' ? 'none' : 'block')};
`;

const Header = ({ location }) => {
  const size = useWindowSize();

  return (
    <StyledHeader location={location}>
      {size.width > 700 ? (
        <>
          <Logo />
          <StyledSocialMediaIconsContainer>
            <SocialMediaFacebookIcon />
            <SocialMediaLinkedinIcon />
          </StyledSocialMediaIconsContainer>
        </>
      ) : (
        <>
          <StyledBackButton location={location} />
          <StyledLogo mobile />
        </>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  location: PropTypes.string,
};

export default Header;
