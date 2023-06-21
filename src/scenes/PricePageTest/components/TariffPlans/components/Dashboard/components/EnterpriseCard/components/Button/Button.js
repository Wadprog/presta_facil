import React from 'react';

import style from './Button.module.scss';

const Button = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>Button</div>
    </div>
  );
};

export default Button;
