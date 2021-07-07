import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import ThankyouPage from '@scenes/ThankyouPage';

const Page = ({ data }) => {
  const thankyouPageData = data.allPrismicThankyoupage.edges[0].node;
  if (!thankyouPageData) return null;
  const { id, uid, lang, type, alternate_languages } = thankyouPageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { data: thankyouPageContent } = thankyouPageData;

  const { metatitle, metadescription, canonical } = thankyouPageContent;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
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
  query {
    allPrismicThankyoupage {
      edges {
        node {
          uid
          type
          lang
          id
          data {
            title {
              text
            }
            pagemessage {
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
            buttontext {
              text
            }
            buttonlink {
              text
            }
          }
          alternate_languages {
            id
            lang
            type
            uid
          }
        }
      }
    }
  }
`;

export default Page;
