import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { object, array } from 'prop-types';

import LangContext from '@contexts';
import { langPath } from '@helpers';
import style from './Agencies.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';

const Agencies = ({ primary }) => {
  const currentLang = useContext(LangContext);

  const {
    buttontext: buttonText,
    title,
    page: buttonLink,
    description,
    linktext: linkText,
  } = primary;

  return (
    <section className={style.agencies}>
      <div className={style.container}>
        <div className={style.image}>
          <Image imageSharp={primary.imageSharp} image={primary.image} />
        </div>
        <div className={style.textBlock}>
          <h2 className={style.title}>{title.text}</h2>
          <p className={style.description}>{description.text}</p>
          <Link
            to={`${langPath(currentLang)}/${buttonLink.text}`}
            className={style.link}
          >
            {linkText.text}
          </Link>
          <div className={style.button}>
            <Button
              variant={VARIANT.TRANSPARENT}
              to={buttonLink.text}
              fullWidth
            >
              {buttonText.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Agencies.propTypes = {
  primary: object,
  fields: array,
};

export default Agencies;
