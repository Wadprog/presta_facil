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
              ... on PrismicHomepageBodyHero1 {
                id
                slice_type
                primary {
                  button {
                    raw
                  }
                  buttonlink {
                    text
                  }
                  buttonsecondary {
                    raw
                  }
                  buttonsecondarylink {
                    raw
                  }
                  cookieimage {
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
                  }
                  description {
                    raw
                  }
                  heroimage {
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
                  }
                  modalbuttondescription {
                    raw
                  }
                  modalbuttontitle {
                    raw
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
                  policyimage {
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
                  }
                  preferenceimage {
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
                  }
                  sub_title {
                    raw
                  }
                  title {
                    raw
                  }
                  trusted {
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
              ... on PrismicHomepageBodyTestimonials {
                id
                slice_type
                items {
                  company {
                    raw
                  }
                  name {
                    raw
                  }
                  photo {
                    alt
                    url
                  }
                  text {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodySolutions {
                id
                slice_type
                primary {
                  description {
                    raw
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
                  pagename {
                    raw
                  }
                  text {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyTechnologies {
                id
                slice_type
                primary {
                  description {
                    raw
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
                  name {
                    raw
                  }
                  pagename {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyFeatures {
                id
                slice_type
                primary {
                  description {
                    raw
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
                  pagename {
                    raw
                  }
                  text {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyWorks {
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
              ... on PrismicHomepageBodyPlans {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
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
              ... on PrismicHomepageBodyArticles {
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
              ... on PrismicHomepageBodySubscribe {
                id
                slice_type
                primary {
                  buttontext {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicHomepageBodyAgencies {
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
                  page {
                    text
                  }
                  title {
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
