import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import SubprocessorsPage from '@scenes/SubprocessorsPage';

const Page = ({ data }) => {
  const subprocessorsPageData = data.prismic.allSubprocessorss.edges[0];
  if (!subprocessorsPageData) return null;
  const subprocessorsPageContent = subprocessorsPageData.node;
  const { metatitle, metadescription, canonical } = subprocessorsPageContent;

  return (
    <Layout
      activeDocMeta={subprocessorsPageContent._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <SubprocessorsPage content={subprocessorsPageContent} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allSubprocessorss(uid: $uid, lang: $lang) {
        edges {
          node {
            _meta {
              alternateLanguages {
                id
                lang
                type
                uid
              }
              uid
              type
              lang
            }
            canonical
            metadescription
            metatitle
            pagetitle
            body {
              ... on PRISMIC_SubprocessorsBodyTable {
                type
                label
                fields {
                  col1
                  col2
                  col3
                  col4
                }
              }
              ... on PRISMIC_SubprocessorsBodyTable_rows_headers {
                type
                label
                fields {
                  col1
                  col2
                  col3
                  col4
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
