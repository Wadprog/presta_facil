import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import LawPage from '@scenes/LawPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allSolutionpages.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;

  return (
    <Layout activeDocMeta={body._meta}>
      <LawPage content={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allSolutionpages(uid: $uid, lang: $lang) {
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
              ... on PRISMIC_SolutionpageBodyHero {
                type
                label
                fields {
                  partnerslogo
                }
                primary {
                  modalvideo {
                    ... on PRISMIC__ExternalLink {
                      url
                      _linkType
                    }
                  }
                  buttontext
                  buttonlink
                  description
                  flag
                  title
                }
              }
              ... on PRISMIC_SolutionpageBodyProjects {
                type
                label
                fields {
                  description
                  link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  screenshot
                  title
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_SolutionpageBodyQuestions {
                type
                label
                fields {
                  link {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  linktext
                  scan
                  title
                  content
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_SolutionpageBodyBenefits {
                type
                label
                fields {
                  image
                  text
                }
                primary {
                  title
                  button
                }
              }
              ... on PRISMIC_SolutionpageBodyFeatures {
                type
                label
                fields {
                  description
                  image
                  title
                }
                primary {
                  title
                  button
                }
              }
              ... on PRISMIC_SolutionpageBodyPlans {
                type
                label
                primary {
                  title
                }
              }
              ... on PRISMIC_SolutionpageBodyBooking {
                type
                label
                primary {
                  title
                }
              }
            }
          }
        }
      }
      allLayouts {
        edges {
          node {
            body2 {
              ... on PRISMIC_LayoutBody2Agencies {
                type
                label
                primary {
                  title
                  description
                  buttontext
                  image
                }
              }
              ... on PRISMIC_LayoutBody2Plans {
                type
                label
                fields {
                  image
                  type
                  cardtitle
                  description
                  benefits
                  button
                  buttonprice
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
