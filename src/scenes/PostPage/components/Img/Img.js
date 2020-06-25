import React from 'react';
import style from './Img.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import Image from '@components/Image/Image';

const Img = ({ primary }) => {
  console.log(primary);
  const { image, imageSharp, caption } = primary;
  return (
    <div className={style.image}>
      <Image image={image} imageSharp={imageSharp} />
      {caption && <RichText render={caption} />}
    </div>
  );
};

Img.propTypes = {
  primary: object,
};

export default Img;
