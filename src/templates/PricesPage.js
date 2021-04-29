import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPage';

const Page = ({ data }) => {
  const pricespageContent = data.prismic.allPricespages.edges[0];
  if (!pricespageContent) return null;
  const pricespage = pricespageContent.node;
  const { metatitle, metadescription, canonical } = pricespage;

  return (
    <Layout
      activeDocMeta={pricespage._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <PricesPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allPricespages(lang: $lang) {
        edges {
          node {
            metatitle
            metadescription
            canonical
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
            body {
              ... on PRISMIC_PricespageBodyHero {
                type
                label
                primary {
                  title
                  subtitle
                }
              }
              ... on PRISMIC_PricespageBodyTariffplans {
                type
                label
                primary {
                  monthlycondition
                  annualcondition
                  buttontext
                  annualcoefficient
                  firstlawtitle
                  firstlawlocation
                  secondlawtitle
                  secondlawlocation
                  thirdlawtitle
                  thirdlawlocation
                  buttonbaselink {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
                fields {
                  plantitle
                  plandescription
                  oneprivacypriceusd
                  twoprivacypriceusd
                  threeprivacypriceusd
                  oneprivacypriceeur
                  twoprivacypriceeur
                  threeprivacypriceeur
                }
              }
              ... on PRISMIC_PricespageBodyPackagesfeatures {
                type
                label
                primary {
                  title
                }
                fields {
                  featuretitle
                  basicstatus
                  plusstatus
                  businessstatus
                  enterprisestatus
                }
              }
              ... on PRISMIC_PricespageBodyPartners {
                type
                label
                primary {
                  title
                }
                fields {
                  logotype
                }
              }
              ... on PRISMIC_PricespageBodyQuestions {
                type
                label
                primary {
                  title
                }
                fields {
                  title
                  content
                  scan
                }
              }
              ... on PRISMIC_PricespageBodyContactus {
                type
                label
                primary {
                  subtitle
                  buttontext
                  buttonlink
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
