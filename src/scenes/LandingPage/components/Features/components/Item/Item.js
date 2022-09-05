import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Item.module.scss';
import { parseString, langPath } from '@helpers';
import LangContext from '@contexts';
import Image from '@components/Image/Image';

const Item = ({ image, text, title, pagename }) => {
  const currentLang = useContext(LangContext);
  const link = langPath(currentLang) + '/' + parseString(pagename.richText);
  return (
    <Link to={link} className={style.item}>
      <div className={style.title}>
        <RichText render={title.richText} />
      </div>
      <div className={style.text}>
        <RichText render={text.richText} />
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} className={style.image} />
      </div>
    </Link>
  );
};
Item.propTypes = {
  image: object,
  text: object,
  title: object,
  pagename: object,
  buttontext: object,
};

export default Item;
