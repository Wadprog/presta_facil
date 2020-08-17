import React from 'react';
import { object, string } from 'prop-types';
import GatsbyImage from 'gatsby-image';

const Image = ({ image, imageSharp, className }) => {
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

  if (image) {
    return (
      <img
        className={className}
        src={image.url}
        alt={image.alt}
        loading="lazy"
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
