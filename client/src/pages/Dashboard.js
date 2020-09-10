import React, { useEffect } from 'react';
import styled from 'styled-components';
import noScroll from 'no-scroll';

// Sidebar
import DashboardSidebar from 'components/organisms/DashboardSidebar/DashboardSidebar';

// Dashboard elements
import DashboardHeader from 'components/molecules/DashboardHeader/DashboardHeader';

const StyledWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dashboard.dashboardBackground};
  display: grid;
  grid-template-columns: 19.9vw auto;
`;

const StyledDashboardContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.3fr 1fr 2fr;
  grid-gap: 24px;
  width: 100%;
  height: 100%;
  padding: 48px;
`;

const StyledDashboard = styled.div`
  background: purple;
  grid-column: 1/2;
  grid-row: 2/3;
`;

const StyledDashboard2 = styled.div`
  background: blue;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const StyledCalendar = styled.div`
  background: lightcyan;
  grid-column: 1/3;
  grid-row: 3/4;
`;

const StyledInfo = styled.div`
  background: lightseagreen;
  grid-row: 2/4;
  grid-column: 3/4;
`;

function Dashboard() {
  useEffect(() => {
    noScroll.on();
  }, []);

  return (
    <StyledWrapper>
      <DashboardSidebar />
      <StyledDashboardContent>
        <DashboardHeader />
        <StyledDashboard />
        <StyledDashboard2 />
        <StyledCalendar />
        <StyledInfo />
      </StyledDashboardContent>
    </StyledWrapper>
  );
}

export default Dashboard;
