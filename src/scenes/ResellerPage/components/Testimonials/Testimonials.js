import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Reviews from './components/Reviews';
import style from './Testimonials.module.scss';

const Testimonials = ({ primary, fields }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.subtitle}>
          <RichText render={primary.subtitle} />
        </div>
        <div className={style.listBox}>
          <Reviews
            items={fields}
            buttonText={primary.buttontext}
            buttonLink={primary.buttonlink}
            logotype={primary.image}
          />
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
};

export default Testimonials;
