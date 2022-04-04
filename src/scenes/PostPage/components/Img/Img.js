import React from 'react';
import style from './Img.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
// import Image from '@components/Image/Image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
const Img = ({ primary }) => {
  const { image, caption } = primary;
  return (
    <Zoom>
      <div className={style.image}>
        <img src={image.url} alt="text" loading="lazy" />
        {caption && <RichText render={caption.richText} />}
      </div>
    </Zoom>
  );
};

Img.propTypes = {
  primary: object,
};

export default Img;
