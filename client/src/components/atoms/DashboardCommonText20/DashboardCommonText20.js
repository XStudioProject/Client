import styled from 'styled-components';

const DashboardCommonText20 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;
`;

export default DashboardCommonText20;
