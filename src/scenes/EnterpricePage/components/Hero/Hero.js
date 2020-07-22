import React from 'react';
import style from './Feature.module.scss';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';

const Hero = ({ primary }) => {
  const { title } = primary;
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title} />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  primary: object,
};

export default Hero;
