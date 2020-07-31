import React from 'react';
import PropTypes from 'prop-types';

import ResellerPage from '@scenes/ResellerPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <ResellerPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;
