import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogPage from '@scenes/BlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <BlogPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allBlogpostpages(lang: $lang) {
        edges {
          node {
            _linkType
            _meta {
              uid
              tags
            }
            body {
              ... on PRISMIC_BlogpostpageBodySubscribe {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
            }
            date
            description
            preview
            backgroundpreview
            title
          }
        }
      }
    }
  }
`;

export default Page;
