import React from 'react';
import PropTypes from 'prop-types';

import Books from './components/Books/Books';
import CallToAction from '@components/CallToAction/CallToAction';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import { parseString } from '@helpers';
import style from './BooksPage.module.scss';

const BooksPage = ({ content, pageTitle, canonical }) => {
  return (
    <div className={style.BooksPage}>
      {content.map((section) => {
        switch (section.slice_type) {
          case 'books':
            return (
              <Books
                {...section}
                key={section.slice_type}
                pagetitle={pageTitle}
              />
            );
          case 'cta':
            return <CallToAction {...section} key={section.slice_type} />;
          default:
            throw new Error(`Unknown section type: ${section.slice_type}`);
        }
      })}
      <BreadcrumbsSemanticMarkup
        pageTitle={parseString(pageTitle.richText)}
        pageUrl={canonical.text}
      />
    </div>
  );
};

BooksPage.propTypes = {
  content: PropTypes.array.isRequired,
  pageTitle: PropTypes.object.isRequired,
  canonical: PropTypes.object.isRequired,
};

export default BooksPage;
