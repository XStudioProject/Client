import styled from 'styled-components';

const PasswordRemainder = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.general.green};
  cursor: pointer;
`;

export default PasswordRemainder;
