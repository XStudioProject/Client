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
`;

const StyledRightArrow = styled(RightArrow)`
  margin-left: 16px;
`;

const SeeMoreButton = () => (
  <StyledWrapper>
    <StyledText>Zobacz więcej</StyledText>
    <StyledRightArrow />
  </StyledWrapper>
);

export default SeeMoreButton;
