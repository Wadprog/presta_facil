import React from 'react';
import style from './TableOfContents.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import * as prismicH from '@prismicio/helpers';
// import ScrollSpy from 'react-scrollspy';

const htmlSerializer = (type, element, key, children) => {
  if (type === prismicH.Element.heading2) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement(
      'a',
      { href: `#${id}`, className: style.h2 },
      `${children}`
    );
  }
  if (type === prismicH.Element.heading3) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement(
      'a',
      { href: `#${id}`, className: style.h3 },
      `${children.join('')}`
    );
  }
  if (type !== prismicH.Element.heading2) {
    return null;
  }
};

const tableOfContents = ({ primary }) => {
  const { text } = primary;
  return (
    <div className={`${style.text} ${style.mainCounter}`}>
      {
        <RichText
          render={text.richText.filter(
            (val) => val.type === 'heading2' || val.type === 'heading3'
          )}
          htmlSerializer={htmlSerializer}
        />
      }
    </div>
  );
};

tableOfContents.propTypes = {
  primary: object,
};

export default tableOfContents;
