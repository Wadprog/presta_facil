import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import VideoBlogPage from '@scenes/VideoBlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const videoblogContent = data.prismic.allVideopages.edges[0];
  if (!videoblogContent) return null;
  const videoblog = videoblogContent.node;
  const { metatitle, metadescription, canonical } = videoblog;

  return (
    <Layout
      activeDocMeta={videoblog._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <VideoBlogPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allVideopages(lang: $lang) {
        edges {
          node {
            metatitle
            metadescription
            canonical
            _meta {
              uid
              type
              lang
              alternateLanguages {
                lang
                type
                uid
              }
            }
            body {
              ... on PRISMIC_VideopageBodyVideolist {
                type
                label
                fields {
                  date
                  tag
                  title
                  videourl {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_VideopageBodyCta {
                type
                label
                primary {
                  sectiontitle
                  description
                  buttontext
                  buttonlink
                  image
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
