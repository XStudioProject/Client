import styled from 'styled-components';

const DashboardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
`;

export default DashboardTitle;
