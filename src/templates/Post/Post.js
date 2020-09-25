import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allBlogpostpages.edges[0];
  const body = pageContext.node;
  return (
    <Layout activeDocMeta={body._meta}>
      <Post current={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allBlogpostpages(uid: $uid, lang: $lang) {
        edges {
          node {
            _linkType
            _meta {
              uid
              type
              lang
              tags
              alternateLanguages {
                lang
                type
                uid
              }
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
          }
        }
      }
    }
  }
`;

export default Page;
