import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import QuizPage from '@scenes/QuizPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const quizPageData = data.allPrismicQuiz.edges[0];
  if (!quizPageData) return null;
  const quizPageContent = quizPageData.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = quizPageContent;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const {
    metatitle,
    metadescription,
    canonical,
    pagetitle: pageTitle,
  } = pageData;

  return (
    <Layout
      hideMenu={true}
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <QuizPage pageTitle={pageTitle} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicQuiz(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          type
          uid
          lang
          id
          alternate_languages {
            uid
            type
            lang
            id
          }
          data {
            pagetitle {
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
          }
        }
      }
    }
  }
`;

export default Page;
