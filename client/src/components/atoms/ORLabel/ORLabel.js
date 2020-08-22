import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h2`
  overflow: hidden;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.home.ORLabelText};
  width: 100%;
  margin-bottom: 32px;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.colors.home.markdownLine};
    content: '';
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

const ORLabel = ({ children }) => <StyledHeading>{children}</StyledHeading>;

ORLabel.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default ORLabel;
