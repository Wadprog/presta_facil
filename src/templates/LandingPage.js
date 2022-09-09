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
        compliance_cta_active={pageData.compliance_cta_active}
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
                  modalbuttondescription {
                    richText
                  }
                  description {
                    richText
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
                  compliance_title {
                    richText
                  }
                  your_website_url {
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
              ... on PrismicLandingPageV1DataBodyFooter {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  sub_title {
                    richText
                  }
                  badge1 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge2 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge3 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge4 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge5 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge_6 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  badge7 {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  description {
                    richText
                  }
                  checklist_advantages {
                    richText
                  }
                  reviewstext {
                    richText
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
              ... on PrismicLandingPageV1DataBodyOption1Cta {
                id
                slice_type
                primary {
                  nearly_there {
                    richText
                  }
                  company_name {
                    richText
                  }
                  your_name {
                    richText
                  }
                  your_company_email {
                    richText
                  }
                  phone_nr_to_contact_you {
                    richText
                  }
                  bottom_text {
                    richText
                  }
                  receive_report {
                    richText
                  }
                }
              }
              ... on PrismicLandingPageV1DataBodyOptionTwoCta {
                id
                slice_type
                primary {
                  pre_title_text {
                    richText
                  }
                  go_straight_to_your_results {
                    richText
                  }
                  checklist {
                    richText
                  }
                  email {
                    richText
                  }
                  phone {
                    richText
                  }
                  receive_report_button {
                    richText
                  }
                  minute_consultation {
                    richText
                  }
                  walk_you_through_text {
                    richText
                  }
                  checklist_long {
                    richText
                  }
                  calendly_link {
                    richText
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
                  subtitle {
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
                  subtitle {
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
                  compliance_button_active
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
                  buttonlink {
                    link_type
                    url
                  }
                  text {
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
                  compliant_input_is_active
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
            compliance_cta_active
          }
        }
      }
    }
  }
`;

export default Page;
