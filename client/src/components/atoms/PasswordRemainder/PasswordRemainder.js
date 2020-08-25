import styled from 'styled-components';

const PasswordRemainder = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.general.green};
  cursor: pointer;
  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default PasswordRemainder;
