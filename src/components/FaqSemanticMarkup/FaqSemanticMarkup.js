import React from 'react';
import PropTypes from 'prop-types';
import { FAQJsonLd } from 'gatsby-plugin-next-seo';

import { parseString } from '@helpers';

const FaqSemanticMarkup = ({ questions }) => {
  const faqList = questions.map(({ title, content }) => {
    return {
      question: parseString(title.raw),
      answer: parseString(content.raw),
    };
  });

  return <FAQJsonLd questions={faqList} />;
};

FaqSemanticMarkup.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FaqSemanticMarkup;
