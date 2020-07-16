import React from 'react';
import style from './ArrowButton.module.scss';
import classnames from 'classnames';
import { string } from 'prop-types';
import Arrow from './image/arrow.inline.svg';

const ArrowButton = ({ type }) => {
  const buttonClass = classnames({
    [style.arrow]: true,
    [style[type]]: true,
    [type]: true,
  });

  return (
    <span className={buttonClass}>
      <Arrow />
    </span>
  );
};

ArrowButton.propTypes = {
  type: string,
};

export default ArrowButton;
