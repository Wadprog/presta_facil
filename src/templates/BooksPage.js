import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BooksPage from '@scenes/BooksPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const bookpageContent = data.allPrismicBookpage.edges[0];
  if (!bookpageContent) return null;
  const { node: bookpageData } = bookpageContent;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = bookpageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const {
    metatitle,
    metadescription,
    canonical,
    body: pageContent,
    pagetitle: pageTitle,
  } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <BooksPage
        content={pageContent}
        pageTitle={pageTitle}
        canonical={canonical}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicBookpage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          uid
          type
          lang
          id
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            canonical {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
            pagetitle {
              raw
            }
            body {
              ... on PrismicBookpageBodyBooks {
                id
                slice_type
                items {
                  bookpageurl {
                    text
                  }
                  buttontext {
                    text
                  }
                  image {
                    url
                    alt
                    fluid(srcSetBreakpoints: 10) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
              }
              ... on PrismicBookpageBodyCta {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  description {
                    raw
                  }
                  image {
                    alt
                    url
                    fluid(srcSetBreakpoints: 10) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                  sectiontitle {
                    raw
                  }
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
