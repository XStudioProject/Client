import styled, { css } from 'styled-components';

const DashboardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.dashboard.dashboardTextLight};
  font-family: 'DM Sans', sans-serif;
  text-transform: ${({ initialCase }) => (initialCase ? 'initial' : 'uppercase')};

  ${({ big }) =>
    big &&
    css`
      color: ${({ theme }) => theme.colors.dashboard.dashboardTextDark};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      font-size: ${({ theme }) => theme.fontSize.l};
      text-transform: initial;
    `}
`;

export default DashboardTitle;
