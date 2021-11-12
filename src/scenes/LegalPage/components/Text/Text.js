import React from 'react';
import style from './Text.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

const Text = ({ primary }) => {
  const { text } = primary;
  return (
    <div className={style.text}>{<RichText render={text.richText} />}</div>
  );
};

Text.propTypes = {
  primary: object,
};

export default Text;
