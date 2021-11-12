import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import VideoArticlePage from '@scenes/VideoArticlePage';

const Page = ({ data }) => {
  const videoArticleContent = data.allPrismicVideoarticlepage.edges[0];
  if (!videoArticleContent) return null;
  const videoArticleNode = videoArticleContent.node;
  const { uid, id, type, alternate_languages, lang } = videoArticleNode;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { data: pageData } = videoArticleNode;
  const { metatitle, metadescription, canonical } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <VideoArticlePage
        canonical={canonical}
        metatitle={metatitle}
        content={pageData}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicVideoarticlepage(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
      edges {
        node {
          data {
            body {
              ... on PrismicVideoarticlepageDataBodyVideoArticleList {
                id
                slice_type
                items {
                  description {
                    text
                  }
                  videotitle {
                    text
                  }
                  videourl {
                    link_type
                    url
                  }
                }
              }
              ... on PrismicVideoarticlepageDataBodyCta {
                id
                slice_type
                primary {
                  buttonlink {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  description {
                    richText
                  }
                  sectiontitle {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                }
              }
            }
            metatitle {
              text
            }
            subtitle {
              text
            }
            metadescription {
              text
            }
            title {
              richText
            }
            canonical {
              text
            }
          }
          alternate_languages {
            id
            lang
            type
          }
          uid
          id
          lang
        }
      }
    }
  }
`;

export default Page;
