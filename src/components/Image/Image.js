import React, { useEffect } from 'react';
import { object, string } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import lozad from 'lozad';

const Image = ({ image, className }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const imageAltTemplate = 'Secure Privacy presentational image';
  const imageAlt = image.alt ? image.alt : imageAltTemplate;

  if (image.hasOwnProperty('gatsbyImageData')) {
    return (
      <GatsbyImage
        className={className}
        image={image.gatsbyImageData}
        alt={imageAlt}
      />
    );
  }

  if (image && className) {
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
        className="lozad"
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
