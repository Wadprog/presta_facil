import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Item.module.scss';
import { parseString, langPath } from '@helpers';
import LangContext from '@contexts';
import Image from '@components/Image/Image';

const Item = ({ image, text, title, pagename, buttontext }) => {
  const currentLang = useContext(LangContext);
  const link = langPath(currentLang) + '/' + parseString(pagename.raw);
  return (
    <Link to={link} className={style.item}>
      <div className={style.title}>
        <RichText render={title.raw} />
      </div>
      <div className={style.text}>
        <RichText render={text.raw} />
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} className={style.image} />
      </div>
      <div className={style.buttonWrapper}>
        <Button variant={VARIANT.PRIMARY} fullWidth element="button">
          {buttontext.text}
        </Button>
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
