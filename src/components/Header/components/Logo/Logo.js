import React, { useState, useEffect, useContext } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import { LogoJsonLd } from 'gatsby-plugin-next-seo';
import Image from '@components/Image/Image';

import LangContext from '@contexts';
import { langPath } from '@helpers';

const Logo = ({ img }) => {
  const currentLang = useContext(LangContext);
  const { url: logoUrl } = img;
  const siteUrl = 'https://secureprivacy.ai/';
  const [logoMarkup, setLogoMarkup] = useState(null);

  useEffect(() => {
    const markup = <LogoJsonLd logo={logoUrl} url={siteUrl} />;

    setLogoMarkup(markup);
  }, []);

  return (
    <>
      <Link to={langPath(currentLang) + '/'}>
        <Image image={img} />
      </Link>
      {logoMarkup}
    </>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
