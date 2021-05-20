import React from 'react';
import style from './Text.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, key) => {
  if (type !== 'image') {
    return;
  }

  const props = { src: element.url, alt: element.alt || '', loading: 'lazy' };
  return React.createElement('img', propsWithUniqueKey(props, key));
};

const Text = ({ primary }) => {
  return (
    <div className={style.text}>
      {<RichText render={primary.text} htmlSerializer={htmlSerializer} />}
    </div>
  );
};

Text.propTypes = {
  primary: object,
};

export default Text;
