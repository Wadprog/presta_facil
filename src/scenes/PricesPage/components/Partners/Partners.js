import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import { parameters } from './data';
import style from './Partners.module.scss';

const Partners = ({ primary, fields }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <div className={style.slider}>
        <Swiper {...parameters}>
          {fields.map(({ logotype }) => {
            return (
              <div className={style.slide} key={logotype.alt}>
                <img src={logotype.url} alt={logotype.alt} draggable="false" />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

Partners.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
};

export default Partners;
