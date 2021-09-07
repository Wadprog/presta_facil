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
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const mainSection = data.allPrismicLayout.edges;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <SolutionPage
        current={pageContent}
        mainSection={mainSection}
        pageUid={uid}
        canonical={canonical}
        metatitle={metatitle}
        lang={lang}
      />
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
          uid
          type
          lang
          id
          alternate_languages {
            id
            lang
            uid
            type
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
              ... on PrismicSolutionpageDataBodyBenefits {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  buttonlink {
                    text
                  }
                  button {
                    text
                  }
                }
                items {
                  text {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyBooking {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyFeatures {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  buttonlink {
                    text
                  }
                  button {
                    text
                  }
                }
                items {
                  title {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyHero {
                id
                slice_type
                primary {
                  videobuttontext {
                    text
                  }
                  title {
                    raw
                  }
                  previewimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  modalvideo {
                    link_type
                    url
                  }
                  modalctabuttontext {
                    text
                  }
                  modalctabuttonlink {
                    text
                  }
                  description {
                    text
                  }
                  buttontext {
                    text
                  }
                  buttonlink {
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
              ... on PrismicSolutionpageDataBodyPlans {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyProjects {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  title {
                    raw
                  }
                  screenshot {
                    alt
                    url
                  }
                  link {
                    link_type
                    url
                  }
                  description {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  linktext {
                    text
                  }
                  link {
                    link_type
                    url
                  }
                  content {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyContent {
                id
                slice_type
                items {
                  title {
                    raw
                    text
                  }
                  content {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicLayout {
      edges {
        node {
          data {
            body2 {
              ... on PrismicLayoutDataBody2Agencies {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  page {
                    text
                  }
                  link {
                    link_type
                    url
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    raw
                  }
                  buttontext {
                    text
                  }
                }
              }
              ... on PrismicLayoutDataBody2Plans {
                id
                slice_type
                items {
                  type
                  image {
                    alt
                    url
                  }
                  description {
                    raw
                  }
                  cardtitle {
                    raw
                  }
                  buttonprice {
                    raw
                  }
                  buttonlink {
                    link_type
                    url
                  }
                  button {
                    raw
                  }
                  benefits {
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
