import styled from 'styled-components';

const DashboardCommonText20 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeights.bold : theme.fontWeights.regular)};
  color: ${({ theme, black }) =>
    black ? theme.colors.dashboard.dashboardTextDark : theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;

  @media (max-width: 1500px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default DashboardCommonText20;
