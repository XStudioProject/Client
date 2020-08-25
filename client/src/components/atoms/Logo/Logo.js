import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  font-size: ${({ theme, mobile }) => (mobile ? theme.fontSize.s : theme.fontSize.xxl)};
  font-weight: ${({ theme, mobile }) =>
    mobile ? theme.fontWeights.medium : theme.fontWeights.extraBold};
  color: ${({ theme, mobile }) => (mobile ? theme.colors.general.green : 'black')};
  text-transform: uppercase;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.home.greenLabel};
`;

const Logo = ({ mobile }) => (
  <StyledLink to="/" mobile={mobile}>
    {mobile ? (
      <>XPROJEKT</>
    ) : (
      <>
        PROJ<StyledSpan>.</StyledSpan>X
      </>
    )}
  </StyledLink>
);

Logo.propTypes = {
  mobile: PropTypes.bool,
};

export default Logo;
