import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Technology from '@scenes/TechnologyPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allTechnologypages.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;
  return (
    <Layout activeDocMeta={body._meta}>
      <Technology current={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allTechnologypages(uid: $uid, lang: $lang) {
        edges {
          node {
            _linkType
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
              ... on PRISMIC_TechnologypageBodyHero {
                type
                label
                primary {
                  buttonlink
                  buttontext
                  description
                  image
                  title
                }
              }
              ... on PRISMIC_TechnologypageBodyBenefits {
                type
                label
                fields {
                  image
                  text
                }
                primary {
                  description
                  image
                  subtitle
                  title
                }
              }
              ... on PRISMIC_TechnologypageBodyWhatis {
                type
                label
                primary {
                  buttonlink
                  buttontext
                  description
                  image
                  title
                  subtitle
                }
              }
              ... on PRISMIC_TechnologypageBodyHow {
                type
                label
                primary {
                  description
                  image
                  list
                  title
                }
              }
              ... on PRISMIC_TechnologypageBodyBanner {
                label
                primary {
                  buttontext
                  text
                  title
                  buttonlink
                }
                type
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
