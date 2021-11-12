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
                    richText
                  }
                  title {
                    richText
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyBenefits {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  subtitle {
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
              ... on PrismicTechnologypageDataBodyHero {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  image {
                    alt
                    url
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                  description {
                    richText
                  }
                  buttontext {
                    richText
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
                    richText
                  }
                  image {
                    alt
                    url
                  }
                  list {
                    richText
                  }
                  title {
                    richText
                  }
                }
              }
              ... on PrismicTechnologypageDataBodyWhatis {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                  subtitle {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                  description {
                    richText
                  }
                  buttontext {
                    richText
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
  }
`;

export default Page;
