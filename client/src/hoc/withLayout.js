import React from 'react';

import Layout from 'layout/Layout';

const withLayout = (Component) => {
  return function WrappedComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default withLayout;
