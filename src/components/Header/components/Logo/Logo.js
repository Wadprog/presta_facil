import React, { useContext } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import LangContext from '@contexts';
import { langPath } from '@helpers';
import Image from '@components/Image/Image';

const Logo = ({ img }) => {
  const currentLang = useContext(LangContext);

  return (
    <Link to={langPath(currentLang) + '/'}>
      <Image image={img} />
    </Link>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
