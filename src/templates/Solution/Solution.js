import React from 'react';
import PropTypes from 'prop-types';

import SolutionPage from '../../scenes/SolutionPage';
import Layout from '@components/Layout';

const Page = ({ pageContext }) => {
  return (
    <Layout>
      <SolutionPage {...pageContext} />
    </Layout>
  );
};

Page.propTypes = {
  pageContext: PropTypes.object,
};

export default Page;
