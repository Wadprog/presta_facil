import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BookPage from '@scenes/BookPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const bookpageData = data.allPrismicSinglebookpage.edges[0].node;
  if (!bookpageData) return null;
  const {
    data: bookpageContent,
    alternate_languages,
    id,
    uid,
    lang,
    type,
  } = bookpageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical } = bookpageContent;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <BookPage
        content={bookpageContent}
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
    allPrismicSinglebookpage(
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
            metatitle {
              text
            }
            metadescription {
              text
            }
            consenttext {
              text
            }
            canonical {
              text
            }
            buttontext {
              text
            }
            bookurl {
              text
            }
            booktitle {
              text
            }
            bookimage {
              alt
              url
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              dimensions {
                height
                width
              }
            }
            bookdescription {
              text
            }
          }
        }
      }
    }
  }
`;

export default Page;
