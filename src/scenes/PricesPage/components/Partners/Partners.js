import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import { useBreakpoints } from '@hooks';
import { parameters } from './data';
import style from './Partners.module.scss';

const Partners = ({ primary, fields }) => {
  const [key, setKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setKey(+new Date());
  }, [width]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <div className={style.slider} key={key}>
        <Swiper {...parameters}>
          {fields.map(({ logotype }) => {
            return (
              <div className={style.slide} key={logotype.alt}>
                <img
                  src={logotype.url}
                  alt={logotype.alt}
                  draggable="false"
                  loading="lazy"
                />
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
