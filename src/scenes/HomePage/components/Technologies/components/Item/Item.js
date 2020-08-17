import React from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import style from './Item.module.scss';
import Background from '../../image/bg.inline.svg';
import BackgroundHover from '../../image/bg-hover.inline.svg';

const Item = ({ image, name, pagename }) => {
  const link = `/technology/${RichText.asText(pagename)
    .toLowerCase()
    .replace(' ', '-')}`;
  return (
    <Link to={link} className={style.item}>
      <div className={style.background}>
        <BackgroundHover className={style.hoverBg} />
        <Background className={style.mainBg} />
      </div>
      <img
        className={style.icon}
        src={image.url}
        alt={image.alt}
        loading="lazy"
      />
      <div className={style.name}>
        <RichText render={name} />
      </div>
    </Link>
  );
};
Item.propTypes = {
  image: object,
  name: array,
  pagename: array,
};

export default Item;
