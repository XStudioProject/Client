import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: black;
  text-transform: uppercase;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.home.greenLabel};
`;

const Logo = () => (
  <StyledWrapper>
    PROJ<StyledSpan>.</StyledSpan>X
  </StyledWrapper>
);

export default Logo;
