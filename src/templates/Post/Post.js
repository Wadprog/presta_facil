import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import Post from '../../scenes/Post';
import Layout from '@components/Layout';

const Page = ({ data, uid }) => {
  const pageContext = data.prismic.allTechnologypages.edges.filter((item) => {
    return item.node._meta.uid === uid;
  });
  const body = pageContext[0].node;
  return (
    <Layout>
      <Post current={body} />
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
      allTechnologypages(uid: $uid) {
        edges {
          node {
            _linkType
            _meta {
              uid
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
