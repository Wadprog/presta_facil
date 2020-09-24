import React, { useContext } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import LangContext from '@contexts';

const Logo = ({ img }) => {
  const currentLang = useContext(LangContext);
  return (
    <Link to={currentLang + '/'}>
      <img src={img.url} alt={img.alt} loading="lazy" />
    </Link>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
