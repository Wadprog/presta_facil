import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import EnterpricePage from '@scenes/EnterpricePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <EnterpricePage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = graphql`
  {
    prismic {
      allPricesenterpricepages {
        edges {
          node {
            body {
              ... on PRISMIC_PricesenterpricepageBodyFeature {
                type
                label
                fields {
                  image
                  name
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_PricesenterpricepageBodyHero {
                type
                label
                primary {
                  benefitslist
                  benefitstitle
                  ctatext
                  ctatitle
                  subtitle
                  title
                  image
                  video {
                    ... on PRISMIC__ExternalLink {
                      target
                      _linkType
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_PricesenterpricepageBodyCallbanner {
                type
                label
                primary {
                  button
                  image
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PageWithData = () => {
  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Page data={data} />
        ),
        query
      )}
    />
  );
};

export default PageWithData;
