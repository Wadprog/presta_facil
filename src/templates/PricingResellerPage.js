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
            body {
              ... on PrismicPricesresellerpageDataBodyHero {
                id
                slice_type
                primary {
                  title {
                    richText
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
                    richText
                  }
                  numberofdomains
                  description {
                    richText
                  }
                  numberofdomainslabel {
                    text
                  }
                  cardtitle {
                    richText
                  }
                  cardsubtitle {
                    richText
                  }
                  cardsubdescription {
                    richText
                  }
                  carddescription {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  buttonlink {
                    richText
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyProgram {
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
                  text {
                    richText
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
                    richText
                  }
                  subtitle {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                  buttontextshort {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  buttonlink {
                    richText
                  }
                }
                items {
                  text {
                    richText
                  }
                  author {
                    richText
                  }
                }
              }
              ... on PrismicPricesresellerpageDataBodyBook {
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
                  buttontext {
                    richText
                  }
                  buttonlink {
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
