import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Calendar header components
import DashboardTitle from 'components/atoms/DashboardTitle/DashboardTitle';
import SeeMoreButton from 'components/atoms/SeeMoreButton/SeeMoreButton';

import DashboardCalendarItem from 'components/molecules/DashboardCalendarItem/DashboardCalendarItem';

const StyledWrapper = styled.section`
  border: ${({ theme }) => `1px solid ${theme.colors.dashboard.dashboardElementBorder}`};
  border-radius: 18px;
  box-shadow: ${({ theme }) => `20px 20px 30px ${theme.colors.dashboard.shadow}`};
  background-color: ${({ theme }) => theme.colors.dashboard.dashboardElementBackground};
  display: grid;
  grid-template-rows: 72px auto 16px;

  @media (max-width: 1500px) {
    grid-template-rows: 62px auto 8px;
  }
`;

const StyledInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  background: none;
  width: 100%;
  height: 100%;
`;

const DashboardCalendar = ({ className }) => (
  <StyledWrapper className={className}>
    <StyledInformation>
      <DashboardTitle>MÓJ KALENDARZ</DashboardTitle>
      <SeeMoreButton />
    </StyledInformation>
    <StyledContent>
      <DashboardCalendarItem activeItem />
      <DashboardCalendarItem />
      <DashboardCalendarItem />
      <DashboardCalendarItem />
    </StyledContent>
    <div />
  </StyledWrapper>
);

DashboardCalendar.propTypes = {
  className: PropTypes.elementType,
};

export default DashboardCalendar;
