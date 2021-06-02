import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ContactUs from '@scenes/ContactUs';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const contactpageContent = data.prismic.allContacts.edges[0];
  if (!contactpageContent) return null;
  const contactpage = contactpageContent.node;
  const { metatitle, metadescription, canonical } = contactpage;

  return (
    <Layout
      activeDocMeta={contactpage._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <ContactUs content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allContacts(lang: $lang) {
        edges {
          node {
            metatitle
            metadescription
            canonical
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
            title
            company
            email
            question
            counter
            question2
            button
            successinformer
            _linkType
            body {
              ... on PRISMIC_ContactBodyProviders {
                type
                label
                fields {
                  provider
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
