import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Reviews from './components/Reviews';
import style from './Testimonials.module.scss';

const Testimonials = ({ primary, items }) => {
  const {
    title,
    subtitle,
    buttontext,
    buttontextshort,
    buttonlink,
    image,
  } = primary;
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={title.raw} />
        </div>
        <div className={style.subtitle}>
          <RichText render={subtitle.raw} />
        </div>
        <div className={style.listBox}>
          <Reviews
            items={items}
            buttonText={buttontext}
            buttonTextShort={buttontextshort}
            buttonLink={buttonlink}
            logotype={image}
          />
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  primary: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default Testimonials;
