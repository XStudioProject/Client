import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TestImage from 'assets/images/eclipse-account.png';

import { ReactComponent as DownArrow } from 'assets/images/arrow-down.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;
  margin-left: 16px;
  cursor: pointer;

  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  margin-left: 52px;
  cursor: pointer;

  @media (max-width: 1500px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledDownArrow = styled(DownArrow)`
  margin-left: 22px;
  cursor: pointer;
`;

const DashboardUserHeader = ({ name, image }) => (
  <StyledWrapper>
    <StyledImage src={image} alt="user image" />
    <StyledText>{name}</StyledText>
    <StyledDownArrow />
  </StyledWrapper>
);

DashboardUserHeader.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

DashboardUserHeader.defaultProps = {
  name: 'Jakub Nowak',
  image: TestImage,
};

export default DashboardUserHeader;
