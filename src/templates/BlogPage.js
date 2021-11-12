import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogPage from '@scenes/BlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const blogpageContent = data.allPrismicBlogpage.edges[0];
  if (!blogpageContent) return null;
  const blogpage = blogpageContent.node;

  const { id, uid, lang, type, alternate_languages, data: pageData } = blogpage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };

  const { metatitle, metadescription, canonical } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <BlogPage content={data} metatitle={metatitle} canonical={canonical} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicBlogpage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
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
            canonical {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
            title {
              richText
            }
            buttontext {
              text
            }
            subtitle {
              text
            }
            placeholder {
              text
            }
            filtersbuttontext {
              text
            }
          }
        }
      }
    }
    allPrismicBlogpostpage(
      filter: { lang: { eq: $lang } }
      limit: 1000001
      sort: { fields: data___date, order: DESC }
    ) {
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
          tags
          data {
            backgroundpreview {
              alt
              url
            }
            date
            description {
              richText
            }
            title {
              richText
            }
            preview {
              alt
              url
            }
            body {
              ... on PrismicBlogpostpageDataBodySubscribe {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  placeholder {
                    text
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
