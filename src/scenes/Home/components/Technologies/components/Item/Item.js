import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

import style from './Item.module.scss';
import Background from '../../image/bg.inline.svg';
import BackgroundHover from '../../image/bg-hover.inline.svg';
import LangContext from '@contexts';
import { langPath } from '@helpers';
import Image from '@components/Image/Image';

const Item = ({ image, name, pagename }) => {
  const currentLang = useContext(LangContext);
  const link = `${langPath(currentLang)}/technology/${RichText.asText(
    pagename.raw
  )
    .toLowerCase()
    .replace(' ', '-')}`;
  return (
    <Link to={link} className={style.item}>
      <div className={style.background}>
        <BackgroundHover className={style.hoverBg} />
        <Background className={style.mainBg} />
      </div>
      <Image image={image} className={style.icon} />
      <div className={style.name}>
        <RichText render={name.raw} />
      </div>
    </Link>
  );
};
Item.propTypes = {
  image: object,
  name: object,
  pagename: object,
};

export default Item;
