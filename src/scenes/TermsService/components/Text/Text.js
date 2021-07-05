import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Text.module.scss';

const Text = ({ primary }) => {
  const { text } = primary;
  return <div className={style.text}>{<RichText render={text.raw} />}</div>;
};

Text.propTypes = {
  primary: object,
};

export default Text;
