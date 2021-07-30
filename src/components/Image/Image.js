import React, { useEffect } from 'react';
import { object, string } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import lozad from 'lozad';

const Image = ({ image, className }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  if (image.hasOwnProperty('gatsbyImageData')) {
    return (
      <GatsbyImage
        className={className}
        image={image.gatsbyImageData}
        alt={image.alt}
      />
    );
  }

  if (image && className) {
    return (
      <img
        className={`${className} lozad`}
        data-src={image.url}
        alt={image.alt}
        draggable="false"
      />
    );
  }

  if (image && !className) {
    return (
      <img
        className="lozad"
        data-src={image.url}
        alt={image.alt}
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
