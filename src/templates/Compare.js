import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const copmarepageContent = data.prismic.allCopmarepages.edges[0];
  if (!copmarepageContent) return null;
  const copmarepage = copmarepageContent.node;

  return (
    <Layout activeDocMeta={copmarepage._meta}>
      <Post current={copmarepage} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
  uid: PropTypes.string,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allCopmarepages(uid: $uid, lang: $lang) {
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

export default Page;
