import React from 'react';
import { object, array, oneOfType, func, shape, any } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import { parseString } from '@helpers';
import Image from '@components/Image/Image';
import style from './Feature.module.scss';

const Feature = ({ primary, items, scrollToRef }) => {
  const { title } = primary;
  return (
    <section ref={scrollToRef} className={style.feature}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title.raw} />
        </div>
        <ul className={style.list}>
          {items.map(({ image, name }) => {
            return (
              <li className={style.item} key={parseString(name.raw)}>
                <Image image={image} className={style.icon} />
                <RichText render={name.raw} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Feature.propTypes = {
  primary: object,
  items: array,
  scrollToRef: oneOfType([func, shape({ current: any })]),
};

export default Feature;
