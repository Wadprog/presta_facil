import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import SubprocessorsPage from '@scenes/SubprocessorsPage';

const Page = ({ data }) => {
  const subprocessorsPageContent = data.allPrismicSubprocessors.edges[0].node;
  if (!subprocessorsPageContent) return null;
  const {
    id,
    uid,
    lang,
    type,
    alternate_languages,
    data: subprocessorsPageData,
  } = subprocessorsPageContent;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical } = subprocessorsPageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <SubprocessorsPage
        content={subprocessorsPageData}
        canonical={canonical}
        metatitle={metatitle}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allPrismicSubprocessors {
      edges {
        node {
          uid
          type
          lang
          id
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
              text
            }
            body {
              ... on PrismicSubprocessorsBodyTable {
                id
                slice_type
                items {
                  col1 {
                    raw
                  }
                  col2 {
                    raw
                  }
                  col3 {
                    raw
                  }
                  col4 {
                    raw
                  }
                }
              }
              ... on PrismicSubprocessorsBodyTableRowsHeaders {
                id
                slice_type
                items {
                  col1 {
                    raw
                  }
                  col2 {
                    raw
                  }
                  col3 {
                    raw
                  }
                  col4 {
                    raw
                  }
                }
              }
            }
          }
          alternate_languages {
            id
            lang
            type
            uid
          }
        }
      }
    }
  }
`;

export default Page;
