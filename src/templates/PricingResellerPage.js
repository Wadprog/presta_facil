import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import ResellerPage from '@scenes/ResellerPage';

const Page = ({ data }) => {
  const resellerpageContent = data.allPrismicPricesresellerpage.edges[0];
  if (!resellerpageContent) return null;
  const resellerpage = resellerpageContent.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = resellerpage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <ResellerPage
        content={pageContent}
        canonical={canonical}
        metatitle={metatitle}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicPricesresellerpage(
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
            name {
              raw
            }
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
              ... on PrismicPricesresellerpageBodyHero {
                id
                slice_type
                primary {
                  buttonlink {
                    text
                  }
                  buttontext {
                    text
                  }
                  description {
                    text
                  }
                  modalctabuttonlink {
                    text
                  }
                  modalctabuttontext {
                    text
                  }
                  modalvideo {
                    link_type
                    url
                  }
                  previewimage {
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
                  title {
                    text
                  }
                  videobuttontext {
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
              ... on PrismicPricesresellerpageBodyJoin {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  carddescription {
                    raw
                  }
                  cardsubdescription {
                    raw
                  }
                  cardsubtitle {
                    raw
                  }
                  cardtitle {
                    raw
                  }
                  description {
                    raw
                  }
                  numberofdomains
                  title {
                    raw
                  }
                  unitcost
                }
              }
              ... on PrismicPricesresellerpageBodyProgram {
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
                  category
                  image {
                    alt
                    url
                  }
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPricesresellerpageBodyTestimonials {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttontextshort {
                    raw
                  }
                  image {
                    alt
                    url
                  }
                  subtitle {
                    raw
                  }
                  title {
                    raw
                  }
                }
                items {
                  author {
                    raw
                  }
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPricesresellerpageBodyBook {
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
                  buttontext {
                    raw
                  }
                  buttonlink {
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
