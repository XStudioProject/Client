import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-1.svg';

const StyledWrapper = styled(NavLink)`
  width: 100%;
  height: 64px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;

  @media (min-width: 1920px) and (min-height: 1080px) {
    height: 72px;
  }

  @media (max-width: 1500px) {
    height: 56px;
  }
`;

const StyledIconContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 21px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1500px) {
    width: 25px;
    height: 25px;
    margin-right: 16px;
  }
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const DashboardNavItem = ({ icon, text }) => {
  const IconTagName = icon;
  return (
    <StyledWrapper
      activeStyle={{
        backgroundColor: '#F2FCFA',
      }}
      to={`/${text.toLowerCase()}`}
    >
      <StyledIconContainer>
        <IconTagName />
      </StyledIconContainer>
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

DashboardNavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

DashboardNavItem.defaultProps = {
  icon: DashboardIcon,
  text: 'Dashboard',
};

export default DashboardNavItem;
