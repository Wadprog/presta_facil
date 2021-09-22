import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Technology from '@scenes/TechnologyPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicTechnologypage.edges[0].node;
  if (!pageContext) return null;
  const { uid, id, lang, type, alternate_languages, data: body } = pageContext;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical } = body;
  const { body: pageContent } = body;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <Technology
        current={pageContent}
        metatitle={metatitle}
        canonical={canonical}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicTechnologypage(
      filter: { uid: { eq: $uid }, lang: { eq: $lang } }
    ) {
      edges {
        node {
          uid
          type
          lang
          alternate_languages {
            id
            lang
            type
            uid
          }
          id
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
              ... on PrismicTechnologypageDataBodyBanner {
                id
                slice_type
                primary {
                  buttonlink {
                    text
                  }
                  buttontext {
                    text
                  }
                  link {
                    text
                  }
                  linktext {
                    text
                  }
                  text {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyBenefits {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  subtitle {
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
              ... on PrismicTechnologypageDataBodyHero {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  image {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  description {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttonlink {
                    text
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyHow {
                id
                slice_type
                primary {
                  description {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  list {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyWhatis {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  subtitle {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttonlink {
                    text
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyContent {
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
                  shorttitle {
                    text
                  }
                }
                primary {
                  toctitle {
                    text
                    raw
                  }
                  maintitle {
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
