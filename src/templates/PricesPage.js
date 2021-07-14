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
            canonical {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
            body {
              ... on PrismicPricespageBodyHero {
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
              ... on PrismicPricespageBodyPartners {
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
              ... on PrismicPricespageBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  content {
                    raw
                  }
                  title {
                    raw
                  }
                  link {
                    link_type
                    url
                  }
                }
              }
              ... on PrismicPricespageBodyContactus {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  subtitle {
                    raw
                  }
                }
              }
              ... on PrismicPricespageBodyPackagesfeatures {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  basicstatus {
                    raw
                  }
                  businessstatus {
                    raw
                  }
                  enterprisestatus {
                    raw
                  }
                  featuretitle {
                    raw
                  }
                  plusstatus {
                    raw
                  }
                }
              }
              ... on PrismicPricespageBodyTariffplans {
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
                  plandescription {
                    raw
                  }
                  plantitle {
                    raw
                  }
                  threeprivacypriceeur
                  threeprivacypriceusd
                  twoprivacypriceeur
                  twoprivacypriceusd
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
