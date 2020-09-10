import styled from 'styled-components';

const DashboardWelcomeText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextDark};
  font-family: 'DM Sans', sans-serif;
  letter-spacing: -0.5px;
`;

export default DashboardWelcomeText;
