import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  margin-bottom: 8px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 16px;
  }
`;

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.general.white};
  border: ${({ theme }) => `2px solid ${theme.colors.general.checkboxBorder}`};
  border-radius: 2px;
  margin-right: 8px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    width: 28px;
    height: 28px;
  }
`;

const StyledCheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.home.formText};
  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledRequiredStar = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.general.requiredStar};
`;

const FormCheckbox = ({ labelName, required, className }) => (
  <StyledWrapper className={className}>
    <StyledCheckbox type="checkbox" />
    <StyledCheckboxLabel>
      {labelName}
      {required && <StyledRequiredStar>*</StyledRequiredStar>}
    </StyledCheckboxLabel>
  </StyledWrapper>
);

FormCheckbox.propTypes = {
  labelName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.elementType,
};

export default FormCheckbox;
