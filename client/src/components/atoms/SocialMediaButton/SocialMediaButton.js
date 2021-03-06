import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import googleIcon from 'assets/images/google.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.general.socialMediaButtonBackground};
  -webkit-appearance: none;
  box-shadow: ${({ theme }) => `10px 10px 30px ${theme.colors.general.socialMediaButtonShadow}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.general.checkboxBorder}`};
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 700px) {
    height: 48px;
  }

  img {
    height: 32px;
    width: 32px;
    margin-right: 8px;
    @media (min-width: 1920px) and (min-height: 1080px) {
      height: 40px;
      width: 40px;
      margin-right: 16px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.general.socialMediaButtonText};

    @media (min-width: 1920px) and (min-height: 1080px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media (max-width: 400px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
  :first-of-type {
    margin-right: 16px;

    @media (max-width: 700px) {
      margin-right: 8px;
    }
  }
`;

const SocialMediaButton = ({ icon, name }) => (
  <StyledWrapper>
    <img src={icon} alt="social-media-icon" />
    <p>{name}</p>
  </StyledWrapper>
);

SocialMediaButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

SocialMediaButton.defaultProps = {
  icon: googleIcon,
  name: 'Google',
};

export default SocialMediaButton;
