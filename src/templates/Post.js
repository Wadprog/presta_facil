import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicBlogpostpage.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;
  const {
    alternate_languages,
    data: pageData,
    id,
    lang,
    type,
    uid,
    tags,
  } = body;
  const { title, description, canonical } = pageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={title}
      metadescription={description}
      canonical={canonical}
    >
      <Post current={pageData} tags={tags} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicBlogpostpage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          uid
          type
          lang
          id
          tags
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            canonical {
              text
            }
            description {
              text
            }
            title {
              text
            }
            backgroundpreview {
              alt
              url
            }
            preview {
              alt
              url
            }
            date
            body {
              ... on PrismicBlogpostpageBodyText {
                id
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageBodyQuote {
                id
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageBodyImage {
                id
                slice_type
                primary {
                  caption {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicBlogpostpageBodyVideo {
                id
                slice_type
                primary {
                  video {
                    url
                  }
                }
              }
              ... on PrismicBlogpostpageBodyAgencies {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  description {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicBlogpostpageBodyArticles {
                id
                slice_type
                primary {
                  buttontext {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageBodySubscribe {
                id
                slice_type
                primary {
                  buttontext {
                    raw
                  }
                  title {
                    raw
                  }
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
