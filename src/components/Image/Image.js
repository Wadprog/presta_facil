import React, { useEffect } from 'react';
import { object, string } from 'prop-types';
import GatsbyImage from 'gatsby-image';
import lozad from 'lozad';

const Image = ({ image, imageSharp, className }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  if (imageSharp) {
    return (
      <GatsbyImage
        className={className}
        fluid={imageSharp.childImageSharp.fluid}
        alt={imageSharp.alt}
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
  imageSharp: object,
  className: string,
};

export default Image;
