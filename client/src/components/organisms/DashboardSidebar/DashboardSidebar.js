import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'components/atoms/Logo/Logo';
import DashboardNavItem from 'components/atoms/DashboardNavItem/DashboardNavItem';

import { ReactComponent as PremiumIllustration } from 'assets/images/premium-1.svg';

import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-1.svg';
import { ReactComponent as AnalyticsIcon } from 'assets/images/dashboard-2.svg';
import { ReactComponent as CalendarIcon } from 'assets/images/dashboard-3.svg';
import { ReactComponent as CommunicationIcon } from 'assets/images/dashboard-4.svg';
import { ReactComponent as CompanyIcon } from 'assets/images/dashboard-5.svg';

import { ReactComponent as SettingsIcon } from 'assets/images/dashboard-6.svg';
import { ReactComponent as HelpIcon } from 'assets/images/dashboard-7.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dashboard.sidebarBackground};
  box-shadow: ${({ theme }) => `10px 10px 30px ${theme.colors.dashboard.shadow}`};
  display: flex;
  flex-direction: column;
`;

const StyledLogoContainer = styled.div`
  width: 100%;
  height: 114px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const StyledIllustrationContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: auto;
    max-height: 30vh;

    @media (max-width: 1500px) {
      max-height: 25vh;
    }
  }
`;

const StyledDashboardNavItem = styled(DashboardNavItem)`
  margin-top: 16px;
  padding-left: 40px;
`;

const DashboardSidebar = () => {
  const [navigationItems] = useState([
    { icon: DashboardIcon, text: 'Dashboard' },
    { icon: AnalyticsIcon, text: 'Analityka' },
    { icon: CalendarIcon, text: 'Kalendarz' },
    { icon: CommunicationIcon, text: 'Komunikacja' },
    { icon: CompanyIcon, text: 'Moja firma' },
  ]);

  return (
    <StyledWrapper>
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledNavigation>
        {navigationItems.map(({ icon, text }) => (
          <DashboardNavItem icon={icon} text={text} key={text} />
        ))}
      </StyledNavigation>
      <StyledIllustrationContainer>
        <PremiumIllustration />
      </StyledIllustrationContainer>
      <StyledDashboardNavItem icon={SettingsIcon} text="Ustawienia" />
      <StyledDashboardNavItem icon={HelpIcon} text="Pomoc" />
    </StyledWrapper>
  );
};

export default DashboardSidebar;
