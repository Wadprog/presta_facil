import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPage';

const Page = ({ data }) => {
  const pricespageContent = data.allPrismicPricespage.edges[0];
  if (!pricespageContent) return null;
  const pricespage = pricespageContent.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = pricespage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <PricesPage
        content={pageContent}
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
    allPrismicPricespage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
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
            canonical {
              text
            }
            body {
              ... on PrismicPricespageDataBodyHero {
                id
                slice_type
                primary {
                  subtitle {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicPricespageDataBodyPartners {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  logotype {
                    alt
                    url
                  }
                }
              }
              ... on PrismicPricespageDataBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  title {
                    raw
                  }
                  link {
                    link_type
                    url
                  }
                  content {
                    raw
                  }
                }
              }
              ... on PrismicPricespageDataBodyContactus {
                id
                slice_type
                primary {
                  subtitle {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttonlink {
                    raw
                  }
                }
              }
              ... on PrismicPricespageDataBodyPackagesfeatures {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  plusstatus {
                    raw
                  }
                  featuretitle {
                    raw
                  }
                  enterprisestatus {
                    raw
                  }
                  businessstatus {
                    raw
                  }
                  basicstatus {
                    raw
                  }
                }
              }
              ... on PrismicPricespageDataBodyTariffplans {
                id
                slice_type
                primary {
                  annualcoefficient
                  annualcondition {
                    raw
                  }
                  buttonbaselink {
                    link_type
                    url
                  }
                  buttontext {
                    raw
                  }
                  firstlawlocation {
                    text
                  }
                  firstlawtitle {
                    text
                  }
                  monthlycondition {
                    raw
                  }
                  secondlawlocation {
                    text
                  }
                  secondlawtitle {
                    text
                  }
                  thirdlawlocation {
                    text
                  }
                  thirdlawtitle {
                    text
                  }
                }
                items {
                  oneprivacypriceeur
                  oneprivacypriceusd
                  threeprivacypriceeur
                  threeprivacypriceusd
                  twoprivacypriceeur
                  twoprivacypriceusd
                  plantitle {
                    raw
                  }
                  plandescription {
                    raw
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
