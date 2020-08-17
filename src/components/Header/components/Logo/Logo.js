import React from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';

const Logo = ({ img }) => {
  return (
    <Link to="/">
      <img src={img.url} alt={img.alt} loading="lazy" />
    </Link>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
