import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Feature from '@scenes/FeaturePage/FeaturePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allFeaturepages.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;

  return (
    <Layout activeDocMeta={body._meta}>
      <Feature current={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allFeaturepages(uid: $uid, lang: $lang) {
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
              ... on PRISMIC_FeaturepageBodyHero {
                type
                label
                primary {
                  modalvideo {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  buttontext
                  buttonlink
                  description
                  flag
                  title
                  modalctabuttontext
                  modalctabuttonlink
                }
                fields {
                  partnerslogo
                }
              }
              ... on PRISMIC_FeaturepageBodyWorks {
                type
                label
                fields {
                  link {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  name
                  screenshot
                  tag
                }
                primary {
                  slider
                  title
                  description
                }
              }
              ... on PRISMIC_FeaturepageBodyQuestions {
                type
                label
                primary {
                  title
                }
                fields {
                  title
                  content
                  linktext
                  scan
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;

export default Page;
