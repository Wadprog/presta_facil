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
  const {
    metatitle,
    metadescription,
    canonical,
    placeholder,
  } = subprocessorsPageData;

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
        placeholder={placeholder}
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
          id
          lang
          alternate_languages {
            lang
            type
            uid
            id
          }
          data {
            pagetitle {
              text
            }
            placeholder {
              text
            }
            metatitle {
              text
            }
            metadescription {
              text
            }
            canonical {
              text
            }
            body {
              ... on PrismicSubprocessorsDataBodyTable {
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
              ... on PrismicSubprocessorsDataBodyTableRowsHeaders {
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
        }
      }
    }
  }
`;

export default Page;
