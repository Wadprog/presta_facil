import React, { useEffect } from 'react';
import { object, string } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import lozad from 'lozad';

const Image = ({ image, className }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const imageAltStub = ' ';
  const imageAlt = image.alt ? image.alt : imageAltStub;
  const [loaded, setLoaded] = React.useState(false);
  if (image.hasOwnProperty('gatsbyImageData')) {
    return (
      <GatsbyImage
        className={className}
        image={image.gatsbyImageData}
        alt={imageAlt}
        loading="eager"
      />
    );
  }
  if (image && className && className.includes('swiper-origin')) {
    return (
      <img
        className={`${className}`}
        style={loaded ? {} : { display: 'none' }}
        src={image.url}
        alt={imageAlt}
        draggable="false"
        onLoad={() => setLoaded(true)}
      />
    );
  }

  if (image && className && !className.includes('swiper-origin')) {
    return (
      <img
        className={`${className} lozad`}
        data-src={image.url}
        alt={imageAlt}
        draggable="false"
      />
    );
  }

  if (image && !className) {
    return (
      <img
        className={`lozad`}
        data-src={image.url}
        alt={imageAlt}
        draggable="false"
      />
    );
  }

  return null;
};

Image.propTypes = {
  image: object,
  className: string,
};

export default Image;
