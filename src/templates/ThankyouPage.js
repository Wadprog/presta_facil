import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import ThankyouPage from '@scenes/ThankyouPage';

const Page = ({ data }) => {
  const thankyouPageData = data.prismic.allThankyoupages.edges[0];
  if (!thankyouPageData) return null;
  const thankyouPageContent = thankyouPageData.node;
  const { metatitle, metadescription, canonical } = thankyouPageContent;

  return (
    <Layout
      activeDocMeta={thankyouPageContent._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <ThankyouPage content={thankyouPageContent} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allThankyoupages(uid: $uid, lang: $lang) {
        edges {
          node {
            title
            pagemessage
            metatitle
            metadescription
            canonical
            buttontext
            buttonlink
            _meta {
              alternateLanguages {
                id
                lang
                type
                uid
              }
              uid
              lang
              type
            }
          }
        }
      }
    }
  }
`;

export default Page;
