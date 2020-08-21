import React from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import Header from 'components/organisms/Header/Header';

const Layout = ({ children }) => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <>
      <Header location={pathname} />
      <main location={pathname}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
