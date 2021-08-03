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
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            backgroundpreview {
              alt
              url
            }
            title {
              text
            }
            preview {
              alt
              url
            }
            date
            canonical {
              text
            }
            body {
              ... on PrismicBlogpostpageDataBodyAgencies {
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
                  sectiontitle {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyArticles {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  buttontext {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyImage {
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
              ... on PrismicBlogpostpageDataBodyQuote {
                id
                slice_type
                primary {
                  quote {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodySubscribe {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  buttontext {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyText {
                id
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyVideo {
                id
                slice_type
                primary {
                  video {
                    link_type
                    url
                  }
                }
              }
            }
            description {
              text
            }
          }
          tags
        }
      }
    }
  }
`;

export default Page;
