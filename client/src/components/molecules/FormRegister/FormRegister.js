import React, { useState } from 'react';
import styled from 'styled-components';

import Title from 'components/atoms/Title/Title';
import GreenLabel from 'components/atoms/GreenLabel/GreenLabel';
import FormInput from 'components/atoms/FormInput/FormInput';
import ButtonV1 from 'components/atoms/ButtonV1/ButtonV1';
import FormCheckbox from 'components/atoms/FormCheckbox/FormCheckbox';
import ORLabel from 'components/atoms/ORLabel/ORLabel';
import SocialMediaButton from 'components/atoms/SocialMediaButton/SocialMediaButton';

import facebookIcon from 'assets/images/facebook.svg';
import googleIcon from 'assets/images/google.svg';

const StyledWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: none;
  @media (min-width: 1920px) and (min-height: 1080px) {
    width: 500px;
  }
  @media (max-width: 700px) {
    max-width: 90vw;
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
  margin-bottom: 16px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 32px;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const StyledGreenLabel = styled(GreenLabel)`
  margin-bottom: 16px;
  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 32px;
  }
`;

const StyledSocialMediaButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const FormRegister = () => {
  const [inputs] = useState([
    {
      name: 'name',
      labelName: 'Imię i nazwisko',
      placeholder: 'John Wick',
      type: 'text',
    },
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
    {
      name: 'phoneNumber',
      labelName: 'Numer telefonu',
      placeholder: '+48 145 523 555',
      type: 'text',
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

  const [checkboxes] = useState([
    {
      labelName: 'Akceptuje warunki umowy i regulamin',
      required: true,
      id: 1,
    },
    {
      labelName: 'Zgadzam się na marketing od PROJX',
      required: false,
      id: 2,
    },
  ]);

  return (
    <StyledWrapper>
      <StyledTitleContainer>
        <Title>Zarejestruj się</Title>
      </StyledTitleContainer>
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
        {checkboxes.map(({ labelName, required, id }) => (
          <FormCheckbox labelName={labelName} key={id} required={required} />
        ))}

        <ButtonV1 name="Zarejestruj się" green />
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

export default FormRegister;
