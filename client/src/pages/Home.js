import React from 'react';
import styled from 'styled-components';

import withLayout from 'hoc/withLayout';

import FormHome from 'components/molecules/FormHome/FormHome';

const StyledWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  background-color: ${({ theme }) => theme.colors.home.background};
  padding-left: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledFormContainer = styled.section`
  height: auto;
`;
const StyledSVGContainer = styled.div``;

function Home() {
  return (
    <StyledWrapper>
      <StyledFormContainer>
        <FormHome />
      </StyledFormContainer>
      <StyledSVGContainer></StyledSVGContainer>
    </StyledWrapper>
  );
}

export default withLayout(Home);
