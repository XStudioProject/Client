import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxxl};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.home.formText};
`;

export default Title;
