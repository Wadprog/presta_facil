import React from 'react';
import QuizPage from '@scenes/QuizPage';

import Layout from '@components/Layout';

const Page = () => {
  return (
    <Layout hideMenu={true}>
      <QuizPage />
    </Layout>
  );
};

export default Page;
