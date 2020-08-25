import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 12px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 16px;
  }
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.home.formText};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 8px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 1.6rem;
  background-color: ${({ theme }) => theme.colors.home.whiteLabel};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.home.formInputBorder}`};
  border-radius: 6px;
  -webkit-appearance: none;
  box-shadow: ${({ theme }) => `15px 15px 30px ${theme.colors.home.formInputShadow}`};
  ::placeholder {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.home.formInput};
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 1920px) and (min-height: 1080px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  @media (min-width: 1920px) and (min-height: 1080px) {
    height: 48px;
  }
`;

const FormInput = ({ name, labelName, placeholder, type }) => (
  <StyledWrapper>
    <StyledLabel htmlFor={name}>{labelName}</StyledLabel>
    <StyledInput type={type} name={name} placeholder={placeholder} />
  </StyledWrapper>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
