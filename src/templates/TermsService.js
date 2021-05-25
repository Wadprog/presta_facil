import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import TermsService from '../scenes/TermsService/index';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allToss.edges[0];
  if (!pageContext) return null;
  const body = pageContext.node;
  const { title, description, canonical } = body;

  return (
    <Layout
      activeDocMeta={body._meta}
      metatitle={title}
      metadescription={description}
      canonical={canonical}
    >
      <TermsService current={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allToss(uid: $uid, lang: $lang) {
        edges {
          node {
            body {
              ... on PRISMIC_TosBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_TosBodyThree_column_table {
                type
                label
                fields {
                  col1
                  col2
                  col3
                }
                primary {
                  thead1
                  thead2
                  thead3
                }
              }
              ... on PRISMIC_TosBodyFour_column_table {
                type
                label
                fields {
                  col1
                  col2
                  col3
                  col4
                }
                primary {
                  theader1
                  theader2
                  theader3
                  theader4
                }
              }
            }
            canonical
            date
            metadescription
            metatitle
            pagetitle
            description
            _meta {
              alternateLanguages {
                uid
                type
                lang
                id
              }
              uid
              type
              lang
            }
          }
        }
      }
    }
  }
`;

export default Page;
