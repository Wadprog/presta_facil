import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
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

const query = graphql`
  {
    prismic {
      allBlogpostpages {
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
