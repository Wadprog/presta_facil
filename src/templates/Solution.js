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
                    richText
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
                    richText
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
                    richText
                    text
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyFeatures {
                id
                slice_type
                primary {
                  title {
                    richText
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
                    richText
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    richText
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
                    richText
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
                  secondbuttonlink {
                    text
                  }
                  secondbuttontext {
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
                    richText
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyProjects {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                }
                items {
                  title {
                    richText
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
                    richText
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    richText
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
                    richText
                  }
                  title {
                    richText
                  }
                }
              }
              ... on PrismicSolutionpageDataBodyContent {
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
                    richText
                  }
                  buttontext {
                    text
                  }
                  linktext {
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
                    richText
                  }
                  cardtitle {
                    richText
                  }
                  buttonprice {
                    richText
                  }
                  buttonlink {
                    link_type
                    url
                  }
                  button {
                    richText
                  }
                  benefits {
                    richText
                  }
                }
              }
            }
            language {
              text
            }
          }
        }
      }
    }
  }
`;

export default Page;
