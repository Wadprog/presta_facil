import React from 'react';
import PropTypes from 'prop-types';

import style from './BooksPage.module.scss';
import Books from './components/Books/Books';
import CallToAction from '@components/CallToAction/CallToAction';

const BooksPage = ({ content, pageTitle }) => {
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
    </div>
  );
};

BooksPage.propTypes = {
  content: PropTypes.array.isRequired,
  pageTitle: PropTypes.object.isRequired,
};

export default BooksPage;
