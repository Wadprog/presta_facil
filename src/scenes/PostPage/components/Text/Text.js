import React from 'react';
import style from './Text.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

const Text = ({ primary }) => {
  console.log(primary);
  return <div className={style.text}>{<RichText render={primary.text} />}</div>;
};

Text.propTypes = {
  primary: object,
};

export default Text;
