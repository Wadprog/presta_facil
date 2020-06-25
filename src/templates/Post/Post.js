import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import Post from '../../scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data, uid }) => {
  const pageContext = data.prismic.allBlogpostpages.edges.filter((item) => {
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
      allBlogpostpages(uid: $uid) {
        edges {
          node {
            _linkType
            _meta {
              uid
            }
            body {
              ... on PRISMIC_BlogpostpageBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_BlogpostpageBodyQuote {
                type
                label
                primary {
                  quote
                }
              }
              ... on PRISMIC_BlogpostpageBodyImage {
                type
                label
                primary {
                  image
                  caption
                }
              }
              ... on PRISMIC_BlogpostpageBodyVideo {
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
              ... on PRISMIC_BlogpostpageBodyAgencies {
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
              ... on PRISMIC_BlogpostpageBodyArticles {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
              ... on PRISMIC_BlogpostpageBodySubscribe {
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
            preview
            title
            category {
              tag
            }
          }
        }
      }
    }
  }
`;
