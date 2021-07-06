import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SolutionPage from '../scenes/SolutionPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicSolutionpage.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;
  const { data: pageData, uid, id, lang, type, alternate_languages } = body;
  const { metatitle, metadescription, canonical } = pageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const mainSection = data.allPrismicLayout.edges;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <SolutionPage current={body} mainSection={mainSection} pageUid={uid} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicSolutionpage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          alternate_languages {
            id
            lang
            uid
            type
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
            body {
              ... on PrismicSolutionpageBodyHero {
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
              ... on PrismicSolutionpageBodyProjects {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  description {
                    raw
                  }
                  title {
                    raw
                  }
                  link {
                    url
                    link_type
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
                }
              }
              ... on PrismicSolutionpageBodyQuestions {
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
                  scan
                  linktext {
                    text
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageBodyBenefits {
                id
                slice_type
                primary {
                  button {
                    text
                  }
                  buttonlink {
                    text
                  }
                  title {
                    raw
                  }
                }
                items {
                  image {
                    alt
                    url
                  }
                  text {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageBodyFeatures {
                id
                slice_type
                primary {
                  button {
                    text
                  }
                  buttonlink {
                    text
                  }
                  title {
                    raw
                  }
                }
                items {
                  description {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageBodyBooking {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageBodyPlans {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
              }
            }
          }
          uid
          type
          id
          lang
        }
      }
    }
    allPrismicLayout {
      edges {
        node {
          data {
            body2 {
              ... on PrismicLayoutBody2Agencies {
                id
                slice_type
                primary {
                  buttontext {
                    text
                  }
                  description {
                    text
                  }
                  image {
                    alt
                    url
                  }
                  link {
                    link_type
                    url
                  }
                  page {
                    text
                  }
                  title {
                    text
                  }
                }
              }
              ... on PrismicLayoutBody2Plans {
                id
                slice_type
                items {
                  benefits {
                    raw
                  }
                  button {
                    raw
                  }
                  buttonlink {
                    link_type
                    url
                  }
                  buttonprice {
                    raw
                  }
                  cardtitle {
                    raw
                  }
                  description {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  type
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
