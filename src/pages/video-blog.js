import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import VideoBlogPage from '@scenes/VideoBlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <VideoBlogPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = graphql`
  {
    prismic {
      allVideopages {
        edges {
          node {
            body {
              ... on PRISMIC_VideopageBodyVideolist {
                type
                label
                fields {
                  date
                  tag
                  title
                  videourl {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_VideopageBodyCta {
                type
                label
                primary {
                  sectiontitle
                  description
                  buttontext
                  buttonlink
                  image
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
