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
                  modalvideo {
                    link_type
                    url
                  }
                  modalctabuttontext {
                    text
                  }
                  modalbuttontitle {
                    richText
                  }
                  modalctabuttonlink {
                    text
                  }
                  modalbuttondescription {
                    richText
                  }
                  heroimage {
                    alt
                    url
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
              ... on PrismicHomepageDataBodyTestimonials {
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
              ... on PrismicHomepageDataBodySolutions {
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
              ... on PrismicHomepageDataBodyTechnologies {
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
              ... on PrismicHomepageDataBodyFeatures {
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
              ... on PrismicHomepageDataBodyPlans {
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
              ... on PrismicHomepageDataBodyArticles {
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
              ... on PrismicHomepageDataBodySubscribe {
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
