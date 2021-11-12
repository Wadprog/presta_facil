import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import style from './Hero.module.scss';

const Hero = ({ primary }) => {
  const { title, subtitle } = primary;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title.richText} />
        </div>
        <div className={style.subtitle}>
          <RichText render={subtitle.richText} />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  primary: PropTypes.object.isRequired,
};

export default Hero;
