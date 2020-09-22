import React from 'react';
import { graphql } from 'gatsby';
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

export const query = graphql`
  query($lang: String) {
    prismic {
      allBookpages(lang: $lang) {
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

export default Page;
