import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import { parseString } from '@helpers';
import style from './CallToAction.module.scss';

const CallToAction = ({ primary }) => {
  const { image, sectiontitle, description, buttontext, buttonlink } = primary;
  const link = parseString(buttonlink.raw);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.image}>
          <Image image={image} />
        </div>
        <div className={style.textBlock}>
          <div className={style.title}>
            <RichText render={sectiontitle.raw} />
          </div>
          <p className={style.description}>{parseString(description.raw)}</p>
          <div className={style.button}>
            <Button variant={VARIANT.PRIMARY} to={link}>
              {parseString(buttontext.raw)}
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
