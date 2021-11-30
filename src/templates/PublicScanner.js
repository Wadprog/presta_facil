import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import ThankyouPage from '@scenes/PublicScannerPage';

const Page = ({ data }) => {
  const publicscannerData = data.allPrismicPublicscanner.edges[0].node;
  if (!publicscannerData) return null;
  const { id, uid, lang, type, alternate_languages } = publicscannerData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { data: publicscannerContent } = publicscannerData;

  const { metatitle, metadescription, canonical } = publicscannerContent;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <ThankyouPage content={publicscannerContent} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allPrismicPublicscanner {
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
            link {
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
          }
        }
      }
    }
  }
`;

export default Page;
