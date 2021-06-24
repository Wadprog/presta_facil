import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Feature from '@scenes/FeaturePage/FeaturePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const {
    alternate_languages,
    id,
    uid,
    lang,
    type,
  } = data.allPrismicFeaturepage.edges[0].node;
  const pageContext = data.allPrismicFeaturepage.edges[0].node.data;
  if (!pageContext) return null;
  const { body: pageContent } = pageContext;
  const { metatitle, metadescription, canonical } = pageContext;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <Feature current={pageContent} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicFeaturepage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          id
          uid
          type
          lang
          data {
            body {
              ... on PrismicFeaturepageBodyHero {
                id
                slice_type
                primary {
                  buttonlink {
                    text
                  }
                  buttontext {
                    text
                  }
                  description {
                    text
                  }
                  modalctabuttonlink {
                    text
                  }
                  modalctabuttontext {
                    text
                  }
                  modalvideo {
                    link_type
                    url
                  }
                  previewimage {
                    alt
                    url
                    fluid(srcSetBreakpoints: 10) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                    thumbnails
                  }
                  title {
                    text
                  }
                  videobuttontext {
                    text
                  }
                }
                items {
                  partnerslogo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicFeaturepageBodyWorks {
                id
                slice_type
                primary {
                  description {
                    raw
                  }
                  title {
                    raw
                  }
                  slider
                }
                items {
                  link {
                    link_type
                    url
                  }
                  name {
                    raw
                  }
                  screenshot {
                    alt
                    url
                    fluid(srcSetBreakpoints: 10) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                    thumbnails
                  }
                  tag {
                    text
                  }
                }
              }
              ... on PrismicFeaturepageBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  content {
                    raw
                  }
                  link {
                    link_type
                    url
                  }
                  linktext {
                    text
                  }
                  title {
                    raw
                  }
                }
              }
            }
            canonical {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
          }
          alternate_languages {
            id
            lang
            type
            uid
          }
        }
      }
    }
  }
`;

export default Page;
