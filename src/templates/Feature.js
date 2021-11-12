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
      <Feature
        current={pageContent}
        canonical={canonical}
        metatitle={metatitle}
      />
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
          uid
          lang
          id
          type
          alternate_languages {
            lang
            id
            type
            uid
          }
          data {
            metatitle {
              text
            }
            metadescription {
              text
            }
            canonical {
              text
            }
            body {
              ... on PrismicFeaturepageDataBodyHero {
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
                    url
                    link_type
                  }
                  previewimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  title {
                    richText
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
              ... on PrismicFeaturepageDataBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  loadmorebuttontext {
                    text
                  }
                }
                items {
                  title {
                    richText
                  }
                  linktext {
                    text
                  }
                  link {
                    link_type
                    url
                  }
                  content {
                    richText
                  }
                }
              }
              ... on PrismicFeaturepageDataBodyWorks {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  description {
                    richText
                  }
                  slider
                }
                items {
                  tag {
                    text
                  }
                  screenshot {
                    alt
                    url
                  }
                  name {
                    richText
                  }
                  link {
                    link_type
                    url
                  }
                }
              }
              ... on PrismicFeaturepageDataBodyContent {
                id
                slice_type
                items {
                  title {
                    richText
                    text
                  }
                  content {
                    richText
                  }
                  shorttitle {
                    text
                  }
                }
                primary {
                  toctitle {
                    text
                    richText
                  }
                  maintitle {
                    richText
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
