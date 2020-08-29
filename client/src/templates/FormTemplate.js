import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as Illustration } from 'assets/images/ilustracja.svg';
import withLayout from 'hoc/withLayout';

const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 100px);
  background-color: ${({ theme }) => theme.colors.home.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 8px 8px 20vw;

  @media (max-width: 1350px) {
    padding-left: 10vw;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap-reverse;
  }

  @media (max-width: 700px) {
    padding: 0 16px 0 16px;
    max-height: 100vh;
    min-height: calc(100vh - 150px);
  }
`;

const StyledFormContainer = styled.section`
  height: 100%;
  width: 100%;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    margin: 0;
    min-height: 330px;
  }
`;
const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  @media (min-height: 1000px) {
    align-items: center;
    padding: 0;
  }

  @media (max-height: 550px) {
    min-height: 240px;
  }

  svg {
    width: 100%;
    height: 100;
    min-width: 600px;
    max-width: 900px;
    max-height: 900px;
    @media (max-width: 700px) {
      max-height: 40vh;
    }
    @media (max-width: 1200px) {
      min-height: 230px;
      min-width: 300px;
      max-height: 30vh;
    }
  }
`;

const FormTemplate = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledFormContainer>{children}</StyledFormContainer>
        <StyledImageContainer>
          <Illustration />
        </StyledImageContainer>
      </StyledWrapper>
    </>
  );
};

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withLayout(FormTemplate);
