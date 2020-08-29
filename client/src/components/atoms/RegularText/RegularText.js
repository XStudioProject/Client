import styled from 'styled-components';

const RegularText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.home.formText};
  line-height: ${({ higher }) => (higher ? '150%' : '100%')};

  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-width: 1200px) {
    text-align: center;
  }

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default RegularText;
