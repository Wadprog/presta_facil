import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import TermsService from '../scenes/TermsService/index';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicTos.edges[0];
  if (!pageContext) return null;
  const termsOfServicePage = pageContext.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = termsOfServicePage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const {
    metatitle,
    metadescription,
    canonical,
    body: pageContent,
    date,
    pagetitle: pageTitle,
  } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <TermsService
        pageContent={pageContent}
        date={date}
        pageTitle={pageTitle}
        canonical={canonical}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicTos(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          uid
          type
          lang
          id
          alternate_languages {
            id
            uid
            lang
            type
          }
          data {
            date
            pagetitle {
              text
            }
            metatitle {
              text
            }
            metadescription {
              text
            }
            description {
              raw
            }
            canonical {
              text
            }
            body {
              ... on PrismicTosBodyText {
                id
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicTosBodyThreeColumnTable {
                id
                slice_type
                primary {
                  thead1 {
                    text
                  }
                  thead2 {
                    text
                  }
                  thead3 {
                    text
                  }
                }
                items {
                  col1 {
                    text
                  }
                  col2 {
                    text
                  }
                  col3 {
                    text
                  }
                }
              }
              ... on PrismicTosBodyFourColumnTable {
                id
                slice_type
                primary {
                  theader1 {
                    text
                  }
                  theader2 {
                    text
                  }
                  theader3 {
                    text
                  }
                  theader4 {
                    text
                  }
                }
                items {
                  col1 {
                    text
                  }
                  col2 {
                    text
                  }
                  col3 {
                    text
                  }
                  col4 {
                    text
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
