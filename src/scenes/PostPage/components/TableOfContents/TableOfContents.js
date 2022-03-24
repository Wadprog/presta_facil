import React from 'react';
import style from './TableOfContents.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import * as prismicH from '@prismicio/helpers';

const htmlSerializerIntermediary = (richText) => {
  const htmlSerializer = (type, element, key, children) => {
    const index = richText.findIndex(
      (el) => JSON.stringify(el) === JSON.stringify(element)
    );

    if (type === prismicH.Element.heading2) {
      let id = element.text.replace(/\W+/g, '-').toLowerCase();
      return React.createElement(
        'a',
        { href: `#${id}`, className: style.h2 },
        `SECTION: ${children}`
      );
    }
    if (type === prismicH.Element.heading3) {
      let id = element.text.replace(/\W+/g, '-').toLowerCase();
      return React.createElement(
        'a',
        { href: `#${id}`, className: style.h3 },
        `${index}. ${children.join('')}`
      );
    }
    if (type !== prismicH.Element.heading2) {
      return null;
    }
  };
  return htmlSerializer;
};

const tableOfContents = ({ primary }) => {
  const { text } = primary;
  return (
    <div className={style.text}>
      {
        <RichText
          render={text.richText.filter(
            (val) => val.type === 'heading2' || val.type === 'heading3'
          )}
          htmlSerializer={htmlSerializerIntermediary(
            text.richText.filter(
              (val) => val.type === 'heading2' || val.type === 'heading3'
            )
          )}
        />
      }
    </div>
  );
};

tableOfContents.propTypes = {
  primary: object,
};

export default tableOfContents;
