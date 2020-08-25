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
  @media (max-height: 900px) {
    align-items: flex-start;
  }
`;

const StyledFormContainer = styled.section`
  height: 100%;
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (min-height: 1000px) {
    align-items: center;
  }
`;
const StyledSVGContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (min-height: 1000px) {
    align-items: center;
  }
  svg {
    margin-left: 2rem;
    max-width: 80%;
    max-height: 80%;
    min-width: 500px;
    min-height: 500px;
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
