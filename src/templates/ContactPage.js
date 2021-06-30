import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ContactUs from '@scenes/ContactUs';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const contactpageContent = data.allPrismicContact.edges[0];
  if (!contactpageContent) return null;
  const contactpage = contactpageContent.node;
  const {
    uid,
    id,
    lang,
    type,
    alternate_languages,
    data: pageData,
  } = contactpage;
  const { metatitle, metadescription, canonical } = pageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <ContactUs content={pageData} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicContact(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
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
            body {
              ... on PrismicContactBodyProviders {
                id
                slice_type
                items {
                  provider {
                    text
                  }
                }
              }
            }
            button {
              text
            }
            canonical {
              text
            }
            company {
              text
            }
            counter {
              text
            }
            email {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
            question {
              text
            }
            question2 {
              text
            }
            successinformer {
              text
            }
            title {
              raw
            }
          }
        }
      }
    }
  }
`;

export default Page;
