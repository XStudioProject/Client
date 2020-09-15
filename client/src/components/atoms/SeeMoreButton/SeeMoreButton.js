import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightArrow } from 'assets/images/arrow-right.svg';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextGreen};
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledIconContainer = styled.div`
  margin-left: 16px;
  width: 9px;
  height: 14px;

  @media (max-width: 1500px) {
    margin-left: 12px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SeeMoreButton = () => (
  <StyledWrapper>
    <StyledText>Zobacz więcej</StyledText>
    <StyledIconContainer>
      <RightArrow />
    </StyledIconContainer>
  </StyledWrapper>
);

export default SeeMoreButton;
