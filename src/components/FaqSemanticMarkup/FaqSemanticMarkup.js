import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FAQJsonLd } from 'gatsby-plugin-next-seo';

import { parseString } from '@helpers';

const FaqSemanticMarkup = ({ questions }) => {
  const [faqMarkup, setFaqMarkup] = useState(null);

  useEffect(() => {
    const makeFaqMarkupList = (questionsList) => {
      if (questionsList.length === 0) {
        return;
      }

      const markupList = questionsList.map(({ title, content }) => {
        return {
          question: parseString(title.raw),
          answer: parseString(content.raw),
        };
      });

      return <FAQJsonLd questions={markupList} />;
    };

    setFaqMarkup(makeFaqMarkupList(questions));
  }, []);

  return faqMarkup;
};

FaqSemanticMarkup.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FaqSemanticMarkup;
