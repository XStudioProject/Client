import React from 'react';
import styled from 'styled-components';

import withLayout from 'hoc/withLayout';

const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.home.background};
`;

function Home() {
  return <StyledWrapper />;
}

export default withLayout(Home);
