import styled from 'styled-components';

const DashboardCommonText20 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeights.bold : theme.fontWeights.regular)};
  color: ${({ theme, black }) =>
    black ? theme.colors.dashboard.dashboardTextDark : theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;
`;

export default DashboardCommonText20;
