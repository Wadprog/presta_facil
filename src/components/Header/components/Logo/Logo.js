import React from 'react';
import { object } from 'prop-types';

const Logo = ({ img }) => {
  return <img src={img.url} alt={img.alt} />;
};

Logo.propTypes = {
  img: object,
};

export default Logo;
