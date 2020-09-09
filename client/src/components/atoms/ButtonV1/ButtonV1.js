import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.button`
  width: 100%;
  min-width: 350px;
  height: 56px;
  border: ${({ theme, green }) =>
    green ? 'none' : `1px solid ${theme.colors.home.formInputBorder}`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme, green }) =>
    green ? theme.fontWeights.medium : theme.fontWeights.semiBold};
  background-color: ${({ theme, green }) =>
    green ? theme.colors.general.green : theme.colors.general.white};
  color: ${({ theme, green }) => (green ? theme.colors.general.white : theme.colors.general.green)};
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: ${({ theme, green }) =>
    green
      ? `0px 2px 20px ${theme.colors.general.greenShadow}`
      : `15px 15px 30px ${theme.colors.home.formInputShadow}`};

  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    height: 56px;
    margin-bottom: 16px;
  }

  @media (max-width: 700px) {
    min-width: 250px;
    height: 48px;
  }
`;

const ButtonV1 = ({ name, green, className }) => (
  <StyledWrapper green={green} className={className}>
    {name}
  </StyledWrapper>
);

ButtonV1.propTypes = {
  name: PropTypes.string.isRequired,
  green: PropTypes.bool,
  className: PropTypes.elementType,
};

export default ButtonV1;
