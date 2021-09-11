import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Home from '@scenes/Home';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const homepageContent = data.allPrismicHomepage.edges[0];
  if (!homepageContent) return null;
  const homepage = homepageContent.node;
  const { id, type, alternate_languages, lang } = homepage;
  const activeDocMeta = { id, lang, type, alternate_languages };
  const { data: pageData } = homepage;
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <Home content={pageContent} currentLanguage={lang} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    allPrismicHomepage(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          type
          lang
          id
          alternate_languages {
            id
            lang
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
              ... on PrismicHomepageDataBodyHero1 {
                id
                slice_type
                primary {
                  trusted {
                    raw
                  }
                  title {
                    raw
                  }
                  sub_title {
                    raw
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
                  modalvideo {
                    link_type
                    url
                  }
                  modalctabuttontext {
                    text
                  }
                  modalbuttontitle {
                    raw
                  }
                  modalctabuttonlink {
                    text
                  }
                  modalbuttondescription {
                    raw
                  }
                  heroimage {
                    alt
                    url
                  }
                  description {
                    raw
                  }
                  cookieimage {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  buttonsecondarylink {
                    raw
                  }
                  buttonsecondary {
                    raw
                  }
                  buttonlink {
                    text
                  }
                  button {
                    raw
                  }
                }
                items {
                  trustedlogo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicHomepageDataBodyTestimonials {
                id
                slice_type
                items {
                  text {
                    raw
                  }
                  photo {
                    alt
                    url
                  }
                  name {
                    raw
                  }
                  company {
                    raw
                  }
                }
              }
              ... on PrismicHomepageDataBodySolutions {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                }
                items {
                  title {
                    raw
                  }
                  text {
                    raw
                  }
                  pagename {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicHomepageDataBodyTechnologies {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                }
                items {
                  image {
                    alt
                    url
                  }
                  name {
                    raw
                  }
                  pagename {
                    raw
                  }
                }
              }
              ... on PrismicHomepageDataBodyFeatures {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  description {
                    raw
                  }
                }
                items {
                  title {
                    raw
                  }
                  text {
                    raw
                  }
                  pagename {
                    raw
                  }
                  buttontext {
                    text
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicHomepageDataBodyWorks {
                id
                slice_type
                primary {
                  categories {
                    text
                  }
                  dropdownlable {
                    raw
                  }
                  title {
                    raw
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
                    raw
                  }
                  screenshot {
                    alt
                    url
                  }
                  tag {
                    raw
                  }
                }
              }
              ... on PrismicHomepageDataBodyPlans {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
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
                  type
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
              ... on PrismicHomepageDataBodyArticles {
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
              ... on PrismicHomepageDataBodySubscribe {
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
              ... on PrismicHomepageDataBodyAgencies {
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
          }
        }
      }
    }
  }
`;

export default Page;
