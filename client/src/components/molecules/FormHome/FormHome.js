import React, { useState } from 'react';
import styled from 'styled-components';

import Title from 'components/atoms/Title/Title';
import RegularText from 'components/atoms/RegularText/RegularText';
import GreenLabel from 'components/atoms/GreenLabel/GreenLabel';
import FormInput from 'components/atoms/FormInput/FormInput';
import ButtonV1 from 'components/atoms/ButtonV1/ButtonV1';
import FormCheckbox from 'components/atoms/FormCheckbox/FormCheckbox';
import PasswordRemainder from 'components/atoms/PasswordRemainder/PasswordRemainder';
import ORLabel from 'components/atoms/ORLabel/ORLabel';
import SocialMediaButton from 'components/atoms/SocialMediaButton/SocialMediaButton';

import facebookIcon from 'assets/images/facebook.svg';
import googleIcon from 'assets/images/google.svg';

const StyledWrapper = styled.div`
  height: auto;
  width: auto;
  max-width: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: none;
  transform-origin: left;

  @media (min-width: 2500px) {
    transform: scale(1);
  }
  @media (max-width: 2000px) {
    transform: scale(0.95);
  }
  @media (max-width: 1500px) {
    transform: scale(0.85);
  }
  @media (max-width: 1000px) {
    transform: scale(0.8);
  }
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

const StyledButtonV1 = styled(ButtonV1)`
  width: 100%;
`;

const StyledCheckboxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSocialMediaButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
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

  const [socialMediaButtons] = useState([
    {
      name: 'Google',
      icon: googleIcon,
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
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
        <StyledCheckboxContainer>
          <FormCheckbox labelName="Zapamiętaj mnie" />
          <PasswordRemainder>Zapomniałem hasła</PasswordRemainder>
        </StyledCheckboxContainer>
        <StyledButtonV1 name="Zarejestruj się" green />
        <StyledButtonV1 name="Zaloguj się" />
      </StyledForm>
      <ORLabel>LUB</ORLabel>
      <StyledSocialMediaButtonsContainer>
        {socialMediaButtons.map(({ name, icon }) => (
          <SocialMediaButton key={name} name={name} icon={icon} />
        ))}
      </StyledSocialMediaButtonsContainer>
    </StyledWrapper>
  );
};

export default FormHome;
