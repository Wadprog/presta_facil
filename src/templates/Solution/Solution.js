import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import SolutionPage from '../../scenes/SolutionPage';
import Layout from '@components/Layout';

const Page = ({ data, uid }) => {
  const pageContext = data.prismic.allSolutionpages.edges.filter((item) => {
    return item.node._meta.uid === uid;
  });
  const body = pageContext[0].node;
  const mainSection = data.prismic.allLayouts.edges;
  return (
    <Layout>
      <SolutionPage current={body} mainSection={mainSection} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
  uid: PropTypes.string,
};

// export default Page;
const PageWithData = ({ pageContext }) => {
  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Page data={data} uid={pageContext.uid} />
        ),
        query
      )}
    />
  );
};
PageWithData.propTypes = {
  pageContext: PropTypes.object,
};

export default PageWithData;

const query = graphql`
  query($uid: String) {
    prismic {
      allSolutionpages(uid: $uid) {
        edges {
          node {
            _linkType
            _meta {
              uid
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
