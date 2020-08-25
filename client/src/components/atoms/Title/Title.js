import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.home.formText};
  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.xxxxl};
  }
`;

export default Title;
