import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BookPage from '@scenes/BookPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const bookpageData = data.prismic.allSinglebookpages.edges[0];
  if (!bookpageData) return null;
  const bookpageContent = bookpageData.node;
  const { metatitle, metadescription, canonical } = bookpageContent;

  return (
    <Layout
      activeDocMeta={bookpageContent._meta}
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
    prismic {
      allSinglebookpages(uid: $uid, lang: $lang) {
        edges {
          node {
            bookimage
            bookdescription
            booktitle
            buttontext
            consenttext
            bookurl
            metatitle
            metadescription
            canonical
            _meta {
              uid
              type
              lang
              alternateLanguages {
                type
                lang
                uid
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
