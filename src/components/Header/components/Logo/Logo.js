import React, { useContext } from 'react';
import { object } from 'prop-types';
import { Link } from 'gatsby';
import { LogoJsonLd } from 'gatsby-plugin-next-seo';

import LangContext from '@contexts';
import { langPath } from '@helpers';

const Logo = ({ img }) => {
  const currentLang = useContext(LangContext);
  const { url, alt } = img;

  return (
    <>
      <Link to={langPath(currentLang) + '/'}>
        <img src={url} alt={alt} loading="lazy" width="105" height="43" />
      </Link>
      <LogoJsonLd
        logo="https://images.prismic.io/secure-privacy/fea99b28-ad05-4398-8531-1b4178f1f9e6_logo.svg?auto=compress%2Cformat&fit=max&q=45"
        url="https://secureprivacy.ai/"
      />
    </>
  );
};

Logo.propTypes = {
  img: object,
};

export default Logo;
