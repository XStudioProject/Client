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

  @media (max-width: 700px) {
    flex-wrap: wrap-reverse;
    padding: 0 16px 0 16px;
  }
`;

const StyledFormContainer = styled.section`
  height: 100%;
  width: 100%;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
  max-width: 500px;
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
  }
  svg {
    width: 100%;
    height: 100;
    max-width: 100%;
    max-height: 100%;
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
