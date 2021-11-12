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
      <ContactUs
        content={pageData}
        metatitle={metatitle}
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
            title {
              richText
            }
            successinformer {
              text
            }
            question2 {
              text
            }
            question {
              text
            }
            metatitle {
              text
            }
            metadescription {
              text
            }
            email {
              text
            }
            counter {
              text
            }
            company {
              text
            }
            canonical {
              text
            }
            button {
              text
            }
            body {
              ... on PrismicContactDataBodyProviders {
                id
                slice_type
                items {
                  provider {
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
