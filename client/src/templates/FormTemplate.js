import React from 'react';
import styled, { css } from 'styled-components';
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
    max-height: calc(100vh - 60px);
    min-height: calc(100vh - 150px);
  }
  @media (max-height: 550px) {
    min-height: 100vh;
    margin-top: 7rem;
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
  @media (min-width: 1200px) {
    justify-content: flex-start;
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
    height: 100%;
    min-width: 600px;
    max-width: 900px;
    max-height: 900px;

    @media (max-width: 1200px) {
      min-height: 200px;
      min-width: 300px;
      max-height: 30vh;
    }

    @media (max-width: 1200px) and (min-height: 1200px) {
      max-height: 35vh;
    }

    @media (max-width: 700px) {
      max-height: 40vh;
      min-width: 200px;
    }

    @media (max-height: 630px) {
      max-height: 25vh;
    }
  }

  ${({ nosvgmobile }) =>
    nosvgmobile &&
    css`
      @media (max-width: 700px) {
        display: none;
      }
    `}
`;

const FormTemplate = ({ children, nosvgmobile }) => {
  return (
    <>
      <StyledWrapper>
        <StyledFormContainer>{children}</StyledFormContainer>
        <StyledImageContainer nosvgmobile={nosvgmobile}>
          <Illustration />
        </StyledImageContainer>
      </StyledWrapper>
    </>
  );
};

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  nosvgmobile: PropTypes.bool,
};

export default withLayout(FormTemplate);
