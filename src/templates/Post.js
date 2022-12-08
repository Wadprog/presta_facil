import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage/PostPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.allPrismicBlogpostpage.edges[0];
  const ctaContent = data.allPrismicBlogpage.edges[0];
  if (!pageContext || !ctaContent) return null;
  const body = pageContext.node;

  const {
    alternate_languages,
    data: pageData,
    id,
    lang,
    type,
    uid,
    tags,
  } = body;

  const cta = ctaContent.node;

  const { title, description, canonical } = pageData;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={title}
      metadescription={description}
      canonical={canonical}
    >
      <Post current={pageData} tags={tags} cta={cta} currentLanguage={lang} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicBlogpostpage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
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
            metadescription {
              text
            }
            metatitle {
              text
            }
            categories {
              is_pilar_page_
              table_of_content_title {
                richText
              }
            }
            backgroundpreview {
              alt
              url
            }
            title {
              text
            }
            preview {
              alt
              url
            }
            date
            canonical {
              text
            }
            body {
              ... on PrismicBlogpostpageDataBodyAgencies {
                id
                slice_type
                primary {
                  buttonlink {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  description {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                  sectiontitle {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyArticles {
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
              ... on PrismicBlogpostpageDataBodyCodeSnippet {
                id
                slice_type
                primary {
                  quote {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyCentralizedCtaFromBlogSingle {
                id
                slice_type
              }
              ... on PrismicBlogpostpageDataBodyImage {
                id
                slice_type
                primary {
                  caption {
                    richText
                  }
                  image {
                    alt
                    url
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyQuote {
                id
                slice_type
                primary {
                  quote {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodySubscribe {
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
              ... on PrismicBlogpostpageDataBodyTable {
                id
                slice_type
                items {
                  col1 {
                    richText
                  }
                  col2 {
                    richText
                  }
                  col3 {
                    richText
                  }
                  col4 {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyTableRowsHeaders {
                id
                slice_type
                items {
                  col1 {
                    richText
                  }
                  col2 {
                    richText
                  }
                  col3 {
                    richText
                  }
                  col4 {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyTwitterEmbedPost {
                id
                slice_type
                items {
                  twitter_post
                }
              }
              ... on PrismicBlogpostpageDataBodyText {
                id
                slice_type
                primary {
                  text {
                    richText
                  }
                }
              }
              ... on PrismicBlogpostpageDataBodyVideo {
                id
                slice_type
                primary {
                  video {
                    link_type
                    url
                  }
                }
              }
            }
            description {
              text
            }
          }
          tags
        }
      }
    }
    allPrismicBlogpage(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          uid
          type
          lang
          id
          data {
            cta_button_text {
              richText
            }
            cta_button_link {
              url
            }
          }
        }
      }
    }
  }
`;

export default Page;
