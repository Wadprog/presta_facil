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
      <BookPage content={bookpageContent} />
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
          alternate_languages {
            lang
            id
            type
            uid
          }
          uid
          type
          lang
          data {
            bookdescription {
              text
            }
            bookimage {
              alt
              url
              fluid(srcSetBreakpoints: 10) {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
              dimensions {
                width
                height
              }
            }
            booktitle {
              text
            }
            bookurl {
              text
            }
            buttontext {
              text
            }
            canonical {
              text
            }
            consenttext {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
          }
        }
      }
    }
  }
`;

export default Page;
