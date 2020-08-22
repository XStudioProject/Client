import styled from 'styled-components';

const RegularText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.home.formText};
  line-height: ${({ higher }) => (higher ? '150%' : '100%')};
`;

export default RegularText;
