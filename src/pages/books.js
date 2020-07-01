import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import BooksPage from '@scenes/BooksPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <BooksPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = graphql`
  {
    prismic {
      allBookpages {
        edges {
          node {
            body {
              ... on PRISMIC_BookpageBodyBooks {
                type
                label
                fields {
                  buttontext
                  image
                  flag
                  downloadlink {
                    _linkType
                    ... on PRISMIC__FileLink {
                      _linkType
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_BookpageBodyCta {
                type
                label
                primary {
                  buttonlink
                  buttontext
                  description
                  image
                  sectiontitle
                }
              }
            }
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
