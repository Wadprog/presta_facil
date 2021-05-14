import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object, string, array } from 'prop-types';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Item.module.scss';
import { parseString, langPath } from '@helpers';
import LangContext from '@contexts';
import Image from '@components/Image/Image';

const Item = ({ image, imageSharp, text, title, pagename }) => {
  const currentLang = useContext(LangContext);
  const link = langPath(currentLang) + '/' + parseString(pagename);
  return (
    <Link to={link} className={style.item}>
      <div className={style.title}>
        <RichText render={title} />
      </div>
      <div className={style.text}>
        <RichText render={text} />
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} imageSharp={imageSharp} className={style.image} />
      </div>
      <div className={style.buttonWrapper}>
        <Button variant={VARIANT.PRIMARY} fullWidth element="button">
          Learn more
        </Button>
      </div>
    </Link>
  );
};
Item.propTypes = {
  image: object,
  imageSharp: object,
  link: string,
  text: array,
  title: array,
  pagename: array,
};

export default Item;
