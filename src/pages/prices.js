import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPage';

const Page = ({ data }) => {
  return (
    <Layout>
      <PricesPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    prismic {
      allPricespages {
        edges {
          node {
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
                  basicplandescription
                  premiumplandescription
                  buttonlink
                  buttontext
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
            }
          }
        }
      }
    }
  }
`;

export default Page;
