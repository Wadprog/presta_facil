import React from 'react';
import style from './Feature.module.scss';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { parseString } from '@helpers';
import Image from '@components/Image/Image';

const Feature = ({ primary, fields }) => {
  const { title } = primary;
  return (
    <section className={style.feature}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <ul className={style.list}>
          {fields.map(({ image, name }) => {
            return (
              <li className={style.item} key={parseString(name)}>
                <Image image={image} className={style.icon} />
                <RichText render={name} />
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
  fields: array,
};

export default Feature;
