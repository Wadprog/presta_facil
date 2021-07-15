import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FAQJsonLd } from 'gatsby-plugin-next-seo';

import { parseString } from '@helpers';

const FaqSemanticMarkup = ({ questions }) => {
  const [faqList, setFaqList] = useState(null);

  useEffect(() => {
    const markupList = questions.map(({ title, content }) => {
      return {
        question: parseString(title.raw),
        answer: parseString(content.raw),
      };
    });

    setFaqList(markupList);
  }, [questions]);

  return faqList && <FAQJsonLd questions={faqList} />;
};

FaqSemanticMarkup.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FaqSemanticMarkup;
