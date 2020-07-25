import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
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

const query = graphql`
  {
    prismic {
      allContacts {
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

const PageWithData = () => {
  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Page data={data} />
        ),
        query
      )}
    />
  );
};

export default PageWithData;
