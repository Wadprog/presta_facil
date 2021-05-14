import React from 'react';
import PropTypes from 'prop-types';

import style from './BooksPage.module.scss';
import Books from './components/Books/Books';
import CallToAction from '@components/CallToAction/CallToAction';

const BooksPage = ({ content }) => {
  const { body, pagetitle } = content;

  return (
    <div className={style.BooksPage}>
      {body.map((section) => {
        switch (section.type) {
          case 'books':
            return (
              <Books {...section} key={section.type} pagetitle={pagetitle} />
            );
          case 'cta':
            return <CallToAction {...section} key={section.type} />;
        }
      })}
    </div>
  );
};

BooksPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BooksPage;
