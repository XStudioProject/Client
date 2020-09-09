import React, { useEffect } from 'react';
import styled from 'styled-components';
import noScroll from 'no-scroll';

import DashboardSidebar from 'components/organisms/DashboardSidebar/DashboardSidebar';

const StyledWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dashboard.dashboardBackground};
  display: flex;
`;

function Dashboard() {
  useEffect(() => {
    noScroll.on();
  }, []);

  return (
    <StyledWrapper>
      <DashboardSidebar />
    </StyledWrapper>
  );
}

export default Dashboard;
