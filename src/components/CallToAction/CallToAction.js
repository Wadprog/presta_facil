import React from 'react';
import style from './CallToAction.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import { object } from 'prop-types';
import { parseString } from '@helpers';
import { RichText } from 'prismic-reactjs';

const CallToAction = ({ primary }) => {
  const {
    image,
    imageSharp,
    sectiontitle,
    description,
    buttontext,
    buttonlink,
  } = primary;
  const link = parseString(buttonlink);
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.image}>
          <Image imageSharp={imageSharp} image={image} />
        </div>
        <div className={style.textBlock}>
          <div className={style.title}>
            <RichText render={sectiontitle} />
          </div>
          <p className={style.description}>{parseString(description)}</p>
          <div className={style.button}>
            <Button variant={VARIANT.PRIMARY} to={link}>
              {parseString(buttontext)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  primary: object,
};

export default CallToAction;
