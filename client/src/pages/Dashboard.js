import React, { useEffect } from 'react';
import styled from 'styled-components';
import noScroll from 'no-scroll';

// Sidebar
import DashboardSidebar from 'components/organisms/DashboardSidebar/DashboardSidebar';

// Dashboard elements
import DashboardHeader from 'components/molecules/DashboardHeader/DashboardHeader';
import DashboardCalendar from 'components/organisms/DashboardCalendar/DashboardCalendar';
import DashboardEventContainer from 'components/organisms/DashboardEventContainer/DashboardEventContainer';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
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

const StyledCalendar = styled(DashboardCalendar)`
  grid-row: 3/4;
  grid-column: 1/3;
`;

const StyledEventContainer = styled(DashboardEventContainer)`
  grid-row: 2/4;
  grid-column: 3/4;
`;

function Dashboard() {
  useEffect(() => {
    noScroll.off();
  }, []);

  return (
    <StyledWrapper>
      <DashboardSidebar />
      <StyledDashboardContent>
        <DashboardHeader />
        <StyledDashboard />
        <StyledDashboard2 />
        <StyledCalendar />
        <StyledEventContainer />
      </StyledDashboardContent>
    </StyledWrapper>
  );
}

export default Dashboard;
