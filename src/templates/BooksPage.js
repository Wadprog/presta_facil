import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BooksPage from '@scenes/BooksPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const bookpageContent = data.prismic.allBookpages.edges[0];
  if (!bookpageContent) return null;
  const bookpage = bookpageContent.node;
  return (
    <Layout activeDocMeta={bookpage._meta}>
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
            _meta {
              uid
              type
              lang
              alternateLanguages {
                lang
                type
                uid
              }
            }
            body {
              ... on PRISMIC_BookpageBodyBooks {
                type
                label
                fields {
                  buttontext
                  image
                  flag
                  bookpageurl
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
