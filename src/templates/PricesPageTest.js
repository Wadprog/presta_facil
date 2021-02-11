import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPageTest';

const Page = ({ data }) => {
  const pricespageContent = data.prismic.allPricespagetests.edges[0];
  if (!pricespageContent) return null;
  const pricespage = pricespageContent.node;

  return (
    <Layout activeDocMeta={pricespage._meta}>
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
      allPricespagetests(lang: $lang) {
        edges {
          node {
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
              ... on PRISMIC_PricespagetestBodyHero {
                type
                label
                primary {
                  title
                  subtitle
                }
              }
              ... on PRISMIC_PricespagetestBodyTariffplans {
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
              ... on PRISMIC_PricespagetestBodyPackagesfeatures {
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
              ... on PRISMIC_PricespagetestBodyPartners {
                type
                label
                primary {
                  title
                }
                fields {
                  logotype
                }
              }
              ... on PRISMIC_PricespagetestBodyQuestions {
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
              ... on PRISMIC_PricespagetestBodyContactus {
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
