import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Home from '@scenes/LandingPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const homepageContent = data.allPrismicLandingPageV1.edges[0];
  if (!homepageContent) return null;
  const homepage = homepageContent.node;
  const { id, type, alternate_languages, lang, uid } = homepage;
  const activeDocMeta = { id, lang, type, alternate_languages, uid };
  const { data: pageData } = homepage;
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
      type={type}
    >
      <Home
        videoask={pageData.videoask}
        content={pageContent}
        currentLanguage={lang}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicLandingPageV1(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
      edges {
        node {
          type
          lang
          id
          uid
          alternate_languages {
            id
            lang
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
              ... on PrismicLandingPageV1DataBodyHero1 {
                id
                slice_type
                primary {
                  trusted {
                    richText
                  }
                  title {
                    richText
                  }
                  sub_title {
                    richText
                  }
                  preferenceimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  policyimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  modalbuttondescription {
                    richText
                  }
                  description {
                    richText
                  }
                  cookieimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  buttonsecondarylink {
                    richText
                  }
                  buttonsecondary {
                    richText
                  }
                  buttonlink {
                    text
                  }
                  button {
                    richText
                  }
                }
                items {
                  trustedlogo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyTestimonials {
                id
                slice_type
                items {
                  text {
                    richText
                  }
                  photo {
                    alt
                    url
                  }
                  name {
                    richText
                  }
                  company {
                    richText
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodySolutions {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  description {
                    richText
                  }
                }
                items {
                  title {
                    richText
                  }
                  text {
                    richText
                  }
                  pagename {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyTechnologies {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  description {
                    richText
                  }
                }
                items {
                  image {
                    alt
                    url
                  }
                  name {
                    richText
                  }
                  pagename {
                    richText
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyFeatures {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  description {
                    richText
                  }
                }
                items {
                  title {
                    richText
                  }
                  text {
                    richText
                  }
                  pagename {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyFeatureschecklist {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  description {
                    richText
                  }
                }
                items {
                  title {
                    richText
                  }
                  text {
                    richText
                  }
                  checklist_negative {
                    richText
                  }
                  checklist_positive {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyWorks {
                id
                slice_type
                primary {
                  categories {
                    text
                  }
                  dropdownlable {
                    richText
                  }
                  title {
                    richText
                  }
                }
                items {
                  category {
                    text
                  }
                  link {
                    link_type
                    url
                  }
                  name {
                    richText
                  }
                  screenshot {
                    alt
                    url
                  }
                  tag {
                    richText
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyPlans {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                }
                items {
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
                  type
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
              ... on PrismicLandingPageV1DataBodyArticles {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  buttontext {
                    richText
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodySubscribe {
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
                  cta_image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyAgencies {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  page {
                    text
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    text
                  }
                  buttontext {
                    text
                  }
                  linktext {
                    text
                  }
                }
              }
            }
            videoask {
              raw
            }
          }
        }
      }
    }
  }
`;

export default Page;
