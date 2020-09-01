import React from 'react';
import PropTypes from 'prop-types';
import style from './BooksPage.module.scss';
import Books from './components/Books/Books';
import CallToAction from '@components/CallToAction/CallToAction';

const BooksPage = ({ content }) => {
  const body = content.prismic.allBookpages.edges[0].node.body;
  return (
    <div className={style.HomePage}>
      {body.map((section) => {
        switch (section.type) {
          case 'books':
            return <Books {...section} key={section.type} />;
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
