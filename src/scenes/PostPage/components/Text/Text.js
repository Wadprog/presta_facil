import React from 'react';
import style from './Text.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import * as prismicH from '@prismicio/helpers';

const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, key, children) => {
  if (type === prismicH.Element.heading1) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement('h1', { id: id }, children);
  }
  if (type === prismicH.Element.heading2) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement('h2', { id: id }, children);
  }
  if (type === prismicH.Element.heading3) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement('h3', { id: id }, children);
  }
  if (type === prismicH.Element.heading4) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return React.createElement('h4', { id: id }, children);
  }

  if (type !== 'image') {
    return;
  }
  const props = { src: element.url, alt: element.alt || '', loading: 'lazy' };
  return React.createElement('img', propsWithUniqueKey(props, key));
};

const Text = ({ primary }) => {
  const { text } = primary;
  return (
    <div className={style.text}>
      {<RichText render={text.richText} htmlSerializer={htmlSerializer} />}
    </div>
  );
};

Text.propTypes = {
  primary: object,
};

export default Text;
