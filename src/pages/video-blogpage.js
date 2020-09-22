import React from 'react';
import { graphql } from 'gatsby';
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

export const query = graphql`
  query($lang: String) {
    prismic {
      allVideopages(lang: $lang) {
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

export default Page;
