import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useWindowSize from 'utils/useWindowSize';

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
  margin: 0;

  @media (max-width: 1500px) {
    max-width: 400px;
  }

  @media (max-width: 1200px) {
    margin-top: 2rem;
  }

  @media (min-width: 2100px) {
    max-width: 650px;
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

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const StyledDescriptionContainer = styled(StyledInformationContainer)`
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

const StyledLink = styled(Link)`
  width: 100%;
`;

const StyledButtonV1 = styled(ButtonV1)`
  width: 100%;
`;

const StyledFormCheckbox = styled(FormCheckbox)`
  margin: 0;
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

const StyledSocialMediaButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const FormHome = () => {
  const size = useWindowSize();

  const [title] = useState('WITAJ W PROJ.X');

  const [titleDescription] = useState(
    'Zautomatyzuj swój czas, który poświęcasz na planowanie, liczenie i kontakt!',
  );

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
        <Title>{title}</Title>
      </StyledTitleContainer>
      <StyledDescriptionContainer>
        <RegularText higher>{titleDescription}</RegularText>
      </StyledDescriptionContainer>
      {size.width > 700 ? (
        <>
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
              <StyledFormCheckbox labelName="Zapamiętaj mnie" />
              <PasswordRemainder>Zapomniałem hasła</PasswordRemainder>
            </StyledCheckboxContainer>
            <StyledButtonV1 name="Zaloguj się" />
          </StyledForm>
          <StyledButtonV1 name="Zarejestruj się" green />
        </>
      ) : (
        <>
          <StyledLink to="/register">
            <StyledButtonV1 name="Zarejestruj się" green />
          </StyledLink>
          <StyledLink to="/login">
            <StyledButtonV1 name="Zaloguj się" />
          </StyledLink>
        </>
      )}
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
