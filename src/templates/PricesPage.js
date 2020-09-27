import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPage';

const Page = ({ data }) => {
  const pricespageContent = data.prismic.allPricespages.edges[0];
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
      allPricespages(lang: $lang) {
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
              ... on PRISMIC_PricespageBodyHero {
                type
                label
                primary {
                  title
                  subtitle
                }
              }
              ... on PRISMIC_PricespageBodyPlans {
                type
                label
                primary {
                  basicplantitle
                  premiumplantitle
                  basicplandescription
                  premiumplandescription
                  monthlycondition
                  annualcondition
                  buttontext
                  link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
                fields {
                  name
                  location
                  basicplanmonthlycost
                  basicplanannualcost
                  premiumplanmonthlycost
                  premiumplanannualcost
                }
              }
              ... on PRISMIC_PricespageBodyFeatures {
                type
                label
                primary {
                  title
                }
                fields {
                  name
                  basicstatus
                  premiumstatus
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
