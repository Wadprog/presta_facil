import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ContactUs from '@scenes/ContactUs';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <ContactUs content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allContacts(lang: $lang) {
        edges {
          node {
            title
            company
            email
            question
            counter
            question2
            button
            button2
            _linkType
          }
        }
      }
    }
  }
`;

export default Page;
