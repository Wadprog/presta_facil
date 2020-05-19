import React from 'react';
// import { Link } from 'gatsby';
import { object, string } from 'prop-types';
import style from './Item.module.scss';
import Background from '../../image/bg.inline.svg';
import BackgroundHover from '../../image/bg-hover.inline.svg';

const Item = ({ logo, name }) => {
  return (
    <div className={style.item}>
      <div className={style.background}>
        <BackgroundHover className={style.hoverBg} />
        <Background className={style.mainBg} />
      </div>
      <img className={style.icon} src={logo.publicURL} alt="technology icon" />
      <h4 className={style.name}>{name}</h4>
    </div>
  );
};
Item.propTypes = {
  logo: object,
  name: string,
};

export default Item;
