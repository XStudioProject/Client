import React from 'react';
import styled from 'styled-components';

import DashboardTitle from 'components/atoms/DashboardTitle/DashboardTitle';
import DashboardWelcomeText from 'components/atoms/DashboardWelcomeText/DashboardWelcomeText';
import DashboardUserHeader from 'components/atoms/DashboardUserHeader/DashboardUserHeader';

import { ReactComponent as NotificationsIcon } from 'assets/images/notifications.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  grid-column: 1/4;
`;

const StyledTextContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
`;

const HeaderRightPart = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
`;

const StyledNotificationsIcon = styled(NotificationsIcon)`
  height: 100%;
`;

const DashboardHeader = () => (
  <StyledWrapper>
    <StyledTextContainer>
      <DashboardTitle>DASHBOARD</DashboardTitle>
      <DashboardWelcomeText>Witaj ponownie, Jakub</DashboardWelcomeText>
    </StyledTextContainer>
    <HeaderRightPart>
      <StyledNotificationsIcon />
      <DashboardUserHeader />
    </HeaderRightPart>
  </StyledWrapper>
);

export default DashboardHeader;
