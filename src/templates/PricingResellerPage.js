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
          id
          lang
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
            name {
              raw
            }
            body {
              ... on PrismicPricesresellerpageDataBodyHero {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  videobuttontext {
                    text
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
                }
                items {
                  partnerslogo {
                    alt
                    url
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyJoin {
                id
                slice_type
                primary {
                  unitcost
                  title {
                    raw
                  }
                  numberofdomains
                  description {
                    raw
                  }
                  numberofdomainslabel {
                    text
                  }
                  cardtitle {
                    raw
                  }
                  cardsubtitle {
                    raw
                  }
                  cardsubdescription {
                    raw
                  }
                  carddescription {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttonlink {
                    raw
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyProgram {
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
                  text {
                    raw
                  }
                  category
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyTestimonials {
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
                  buttontextshort {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  buttonlink {
                    raw
                  }
                }
                items {
                  text {
                    raw
                  }
                  author {
                    raw
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyBook {
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
