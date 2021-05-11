import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import LegalPage from '../scenes/LegalPage/index';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const pageContext = data.prismic.allLegal_pagess.edges[0];
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
      <LegalPage current={body} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allLegal_pagess(uid: $uid, lang: $lang) {
        edges {
          node {
            body {
              ... on PRISMIC_Legal_pagesBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
            canonical
            description
            title
            _meta {
              type
              uid
              lang
              alternateLanguages {
                lang
                type
                uid
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
