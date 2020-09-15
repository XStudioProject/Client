import styled from 'styled-components';

import TestCircle from 'assets/images/eventcontainer/circle-test.png';

const PhotoCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: ${({ theme }) => `1.13px solid ${theme.colors.general.borderCirclePhoto}`};
  background-image: ${({ photo }) => (photo ? `url(${photo})` : `url(${TestCircle})`)};
  background-position: center;
  cursor: pointer;

  @media (max-width: 1500px) {
    width: 40px;
    height: 40px;
  }
`;

export default PhotoCircle;
