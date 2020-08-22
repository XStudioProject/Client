import React from 'react';
import styled from 'styled-components';

import withLayout from 'hoc/withLayout';

import FormHome from 'components/molecules/FormHome/FormHome';
import { ReactComponent as Illustration } from 'assets/images/ilustracja.svg';

const StyledWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  background-color: ${({ theme }) => theme.colors.home.background};
  padding-left: 20vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledFormContainer = styled.section`
  height: auto;
  width: auto;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-height: 1500px) {
    transform: scale(0.95);
    transform-origin: left;
  }
`;
const StyledSVGContainer = styled.div`
  height: 100%;
  width: auto;
  svg {
    height: 80%;
  }
`;

function Home() {
  return (
    <StyledWrapper>
      <StyledFormContainer>
        <FormHome />
      </StyledFormContainer>
      <StyledSVGContainer>
        <Illustration />
      </StyledSVGContainer>
    </StyledWrapper>
  );
}

export default withLayout(Home);
