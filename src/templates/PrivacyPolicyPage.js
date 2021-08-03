import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import PrivacyPolicyPage from '../scenes/PrivacyPolicyPage/index';

const Page = ({ data }) => {
  const privacyPolicyPageData = data.allPrismicPrivacypolicy.edges[0];
  if (!privacyPolicyPageData) return null;

  const privacyPolicyPageContent = privacyPolicyPageData.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = privacyPolicyPageContent;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const {
    metatitle,
    metadescription,
    canonical,
    pagetitle: pageTitle,
  } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <PrivacyPolicyPage pageTitle={pageTitle} canonical={canonical} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicPrivacypolicy(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
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
            pagetitle {
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
          }
        }
      }
    }
  }
`;

export default Page;
