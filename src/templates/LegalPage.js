import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import LegalPage from '../scenes/LegalPage/index';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicLegalPages.edges[0];
  if (!pageContext) return null;
  const legalPage = pageContext.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = legalPage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { title, description, canonical, body: pageContent, date } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={title}
      metadescription={description}
      canonical={canonical}
    >
      <LegalPage
        content={pageContent}
        title={title}
        date={date}
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
    allPrismicLegalPages(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
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
            backgroundpreview {
              alt
              url
            }
            title {
              text
            }
            preview {
              alt
              url
            }
            description {
              text
            }
            date
            canonical {
              text
            }
            body {
              ... on PrismicLegalPagesDataBodyText {
                id
                slice_type
                primary {
                  text {
                    richText
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
