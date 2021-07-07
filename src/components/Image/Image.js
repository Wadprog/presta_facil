import React, { useEffect } from 'react';
import { object, string } from 'prop-types';
import GatsbyImage from 'gatsby-image';
import lozad from 'lozad';

const Image = ({ image, fluid, className }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  if (fluid) {
    return (
      <GatsbyImage
        className={className}
        fluid={fluid}
        alt={fluid.alt}
        draggable={false}
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
  fluid: object,
  className: string,
};

export default Image;
