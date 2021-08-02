import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import VideoBlogPage from '@scenes/VideoBlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const videoblogContent = data.allPrismicVideopage.edges[0];
  if (!videoblogContent) return null;
  const videoblog = videoblogContent.node;
  const { uid, id, type, alternate_languages, lang } = videoblog;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { data: pageData } = videoblog;
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <VideoBlogPage
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
    allPrismicVideopage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          uid
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
              ... on PrismicVideopageDataBodyVideolist {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  date
                  tag
                  title {
                    raw
                  }
                  videourl {
                    link_type
                    url
                  }
                }
              }
              ... on PrismicVideopageDataBodyCta {
                id
                slice_type
                primary {
                  buttonlink {
                    raw
                  }
                  buttontext {
                    raw
                  }
                  description {
                    raw
                  }
                  sectiontitle {
                    raw
                  }
                  image {
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
