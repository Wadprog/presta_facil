import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import Feature from '../../scenes/FeaturePage/FeaturePage';
import Layout from '@components/Layout';

const Page = ({ data, uid }) => {
  const pageContext = data.prismic.allFeaturepages.edges.filter((item) => {
    return item.node._meta.uid === uid;
  });
  const body = pageContext[0].node;
  return (
    <Layout>
      <Feature current={body} />
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
      allFeaturepages(uid: $uid) {
        edges {
          node {
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
                  description
                  flag
                  title
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
