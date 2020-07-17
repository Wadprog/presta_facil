import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data, uid }) => {
  const pageContext = data.prismic.allCopmarepages.edges.filter((item) => {
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
      allCopmarepages(uid: $uid) {
        edges {
          node {
            _linkType
            _meta {
              uid
              tags
            }
            body {
              ... on PRISMIC_CopmarepageBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_CopmarepageBodyVideo {
                type
                label
                primary {
                  video {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_CopmarepageBodyAgencies {
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
              ... on PRISMIC_CopmarepageBodyArticles {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
              ... on PRISMIC_CopmarepageBodySubscribe {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
            }
            date
            description
            title
          }
        }
      }
    }
  }
`;
