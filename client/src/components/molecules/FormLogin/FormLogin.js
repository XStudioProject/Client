import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from 'components/atoms/FormInput/FormInput';
import SocialMediaButton from 'components/atoms/SocialMediaButton/SocialMediaButton';
import ORLabel from 'components/atoms/ORLabel/ORLabel';
import PasswordRemainder from 'components/atoms/PasswordRemainder/PasswordRemainder';
import ButtonV1 from 'components/atoms/ButtonV1/ButtonV1';
import FormCheckbox from 'components/atoms/FormCheckbox/FormCheckbox';

import facebookIcon from 'assets/images/facebook.svg';
import googleIcon from 'assets/images/google.svg';

const StyledWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: none;
  margin: 0;

  @media (max-width: 1500px) {
    max-width: 400px;
  }

  @media (max-width: 1200px) {
    margin-top: 2rem;
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

const StyledCheckboxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 16px;
  }
`;

const StyledFormCheckbox = styled(FormCheckbox)`
  @media (max-width: 700px) {
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const StyledButtonV1 = styled(ButtonV1)`
  width: 100%;
`;

const StyledSocialMediaButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const FormLogin = () => {
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
          <StyledFormCheckbox labelName="Zapamiętaj mnie" />
          <PasswordRemainder>Zapomniałem hasła</PasswordRemainder>
        </StyledCheckboxContainer>
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

export default FormLogin;
