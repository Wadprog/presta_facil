import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ContactUs from '@scenes/ContactUs';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const contactpageContent = data.prismic.allContacts.edges[0];
  if (!contactpageContent) return null;
  const contactpage = contactpageContent.node;

  return (
    <Layout activeDocMeta={contactpage._meta}>
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
            button2
            successinformer
            _linkType
          }
        }
      }
    }
  }
`;

export default Page;
