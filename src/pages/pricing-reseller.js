import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import ResellerPage from '@scenes/ResellerPage';

const Page = ({ data }) => {
  return (
    <Layout>
      <ResellerPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    prismic {
      allPricesresellerpages {
        edges {
          node {
            body {
              ... on PRISMIC_PricesresellerpageBodyHero {
                type
                label
                primary {
                  title
                  description
                  buttonlink
                  buttontext
                  modalvideo {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      target
                      url
                    }
                  }
                }
                fields {
                  partnerslogo
                }
              }
              ... on PRISMIC_PricesresellerpageBodyJoin {
                type
                label
                primary {
                  title
                  description
                  cardtitle
                  carddescription
                  cardsubtitle
                  cardsubdescription
                  buttontext
                  buttonlink
                  numberofdomains
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
