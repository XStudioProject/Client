import React, { useState } from 'react';
import styled from 'styled-components';

import Title from 'components/atoms/Title/Title';
import RegularText from 'components/atoms/RegularText/RegularText';
import GreenLabel from 'components/atoms/GreenLabel/GreenLabel';
import FormInput from 'components/atoms/FormInput/FormInput';

const StyledWrapper = styled.div`
  height: auto;
  width: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const StyledInformationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledTitleContainer = styled(StyledInformationContainer)`
  margin-bottom: 8px;
`;

const StyledDescriptionContainer = styled(StyledInformationContainer)`
  margin-bottom: 32px;
`;

const StyledGreenLabel = styled(GreenLabel)`
  margin-bottom: 32px;
`;

const FormHome = () => {
  const [inputs] = useState([
    {
      name: 'email',
      labelName: 'Adres E-Mail',
      placeholder: 'j.thomas@gmail.com',
      type: 'text',
    },
    {
      name: 'password',
      labelName: 'Hasło',
      placeholder: '********',
      type: 'password',
    },
  ]);

  return (
    <StyledWrapper>
      <StyledTitleContainer>
        <Title>Witaj w PROJ.X</Title>
      </StyledTitleContainer>
      <StyledDescriptionContainer>
        <RegularText higher>
          Zautomatyzuj swój czas, który poświęcasz na planowanie, liczenie i kontakt!
        </RegularText>
      </StyledDescriptionContainer>
      <StyledGreenLabel />
      <StyledForm>
        {inputs.map(({ name, labelName, placeholder, type }) => (
          <FormInput
            key={name}
            name={name}
            labelName={labelName}
            placeholder={placeholder}
            type={type}
          />
        ))}
      </StyledForm>
    </StyledWrapper>
  );
};

export default FormHome;
