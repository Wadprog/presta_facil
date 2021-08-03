import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import EnterpricePage from '@scenes/EnterpricePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const homePageData = data.allPrismicHomepage.edges[0].node.data.body;
  const testimonialsSection = homePageData.find(
    (section) => section.slice_type === 'testimonials'
  );

  const worksSection = homePageData.find(
    (section) => section.slice_type === 'works'
  );

  const enterpricepageContent = data.allPrismicPricesenterpricepage.edges[0];
  if (!enterpricepageContent) return null;
  const enterpricepage = enterpricepageContent.node;

  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = enterpricepage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical } = pageData;
  const { body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <EnterpricePage
        content={pageContent}
        worksSection={worksSection}
        testimonialsSection={testimonialsSection}
        metatitle={metatitle}
        canonical={canonical}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicPricesenterpricepage(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
      edges {
        node {
          uid
          type
          lang
          id
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
              ... on PrismicPricesenterpricepageDataBodyHero {
                id
                slice_type
                primary {
                  video {
                    link_type
                    url
                  }
                  title {
                    raw
                  }
                  subtitle {
                    raw
                  }
                  modalbuttontext {
                    raw
                  }
                  modalbuttonlink {
                    raw
                  }
                  image {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  ctatitle {
                    raw
                  }
                  ctatext {
                    raw
                  }
                  benefitstitle {
                    raw
                  }
                  benefitslist {
                    raw
                  }
                }
              }
              ... on PrismicPricesenterpricepageDataBodyFeature {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  name {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicPricesenterpricepageDataBodyCallbanner {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  button {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicHomepage {
      edges {
        node {
          data {
            body {
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
                  tag {
                    raw
                  }
                  screenshot {
                    alt
                    url
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
