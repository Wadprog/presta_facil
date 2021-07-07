import React from 'react';
import style from './Img.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import Image from '@components/Image/Image';

const Img = ({ primary }) => {
  const { image, caption } = primary;
  return (
    <div className={style.image}>
      <Image image={image} />
      {caption && <RichText render={caption.raw} />}
    </div>
  );
};

Img.propTypes = {
  primary: object,
};

export default Img;
