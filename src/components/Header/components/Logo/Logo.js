import React, { useState, useEffect, useContext } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import { LogoJsonLd } from 'gatsby-plugin-next-seo';

import LangContext from '@contexts';
import { langPath } from '@helpers';

const Logo = ({ img }) => {
  const currentLang = useContext(LangContext);
  const { url: logoUrl, alt } = img;
  const siteUrl = 'https://secureprivacy.ai/';
  const [logoMarkup, setLogoMarkup] = useState(null);

  useEffect(() => {
    const markup = <LogoJsonLd logo={logoUrl} url={siteUrl} />;

    setLogoMarkup(markup);
  }, []);

  return (
    <>
      <Link to={langPath(currentLang) + '/'}>
        <img src={logoUrl} alt={alt} loading="lazy" width="105" height="43" />
      </Link>
      {logoMarkup}
    </>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
