import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.general.white};
  border: ${({ theme }) => `2px solid ${theme.colors.general.checkboxBorder}`};
  border-radius: 2px;
  margin-right: 8px;
`;

const StyledCheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.home.formText};
`;

const FormCheckbox = ({ labelName }) => (
  <StyledWrapper>
    <StyledCheckbox type="checkbox" />
    <StyledCheckboxLabel>{labelName}</StyledCheckboxLabel>
  </StyledWrapper>
);

FormCheckbox.propTypes = {
  labelName: PropTypes.string.isRequired,
};

export default FormCheckbox;
