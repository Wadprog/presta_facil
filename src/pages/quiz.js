import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import QuizPage from '@scenes/QuizPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const quizPageData = data.prismic.allQuizs.edges[0];
  if (!quizPageData) return null;
  const quizPageContent = quizPageData.node;
  const { metatitle, metadescription, canonical, pagetitle } = quizPageContent;

  return (
    <Layout
      hideMenu={true}
      activeDocMeta={quizPageContent._meta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <QuizPage pagetitle={pagetitle} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    prismic {
      allQuizs(uid: $uid, lang: $lang) {
        edges {
          node {
            pagetitle
            metatitle
            metadescription
            canonical
            _meta {
              uid
              type
              lang
              alternateLanguages {
                uid
                type
                lang
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
