import React, { useContext, useEffect } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import lozad from 'lozad';

import LangContext from '@contexts';
import { langPath } from '@helpers';

const Logo = ({ img }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const currentLang = useContext(LangContext);

  return (
    <Link to={langPath(currentLang) + '/'}>
      <img data-src={img.url} alt={img.alt} loading="lazy" className="lozad" />
    </Link>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
