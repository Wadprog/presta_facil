import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { globalHistory as history } from '@reach/router';

const Head = ({
  children,
  meta,
  canonical,
  metatitle,
  metadescription,
  currentLang,
  activeDocMeta,
}) => {
  const url = 'https://secureprivacy.ai/';
  const { location } = history;

  const [canonicalUrl, setCanonicalUrl] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [pageDescription, setPageDescription] = useState(null);
  const [opengraphUrl, setOpengrapUrl] = useState(url);
  const [opengraphTitle, setOpengraphTitle] = useState(meta.title);
  const [hrefLangs, setHrefLangs] = useState([]);

  const [defaultHrefLangs, setDefaultHrefLangs] = useState(null);
  const [opengraphDescription, setOpengraphDescription] = useState(
    meta.description
  );

  useEffect(() => {
    if (!canonical) {
      setCanonicalUrl(<link rel="canonical" href={url} />);
      return;
    }

    const currentPageCanonical = canonical.text;
    setCanonicalUrl(<link rel="canonical" href={currentPageCanonical} />);
    setOpengrapUrl(currentPageCanonical);
  }, []);

  useEffect(() => {
    if (!metatitle) {
      setPageTitle(<title>{meta.title}</title>);
      return;
    }

    const currentPageTitle = metatitle.text;
    setPageTitle(<title>{currentPageTitle}</title>);
    setOpengraphTitle(currentPageTitle);
  }, []);

  useEffect(() => {
    if (!metadescription) {
      setPageDescription(
        <meta name="description" content={meta.description} />
      );
      return;
    }
    const currentPageDescription = metadescription.text;
    setPageDescription(
      <meta name="description" content={currentPageDescription} />
    );
    setOpengraphDescription(currentPageDescription);
  }, []);

  useEffect(() => {
    const allHrefLangs = activeDocMeta.alternate_languages.map((val) => {
      if (val.lang.substring(0, 2) == 'en') {
        return {
          completePath:
            url +
            location.pathname
              .replace('/de/', '')
              .replace('/pt/', '')
              .replace('//', '/'),
          lang: val.lang.substring(0, 2),
        };
      }
      if (val.lang.substring(0, 2) == 'pt') {
        return {
          completePath: url + 'pt' + location.pathname.replace('/de/', 'pt/'),
          lang: val.lang.substring(0, 2),
        };
      }
      if (val.lang.substring(0, 2) == 'de') {
        return {
          completePath: url + 'de' + location.pathname.replace('/pt/', 'de/'),
          lang: val.lang.substring(0, 2),
        };
      }
    });

    const defaulLang = {
      completePath:
        url +
        location.pathname
          .replace(
            '/pt/',
            currentLang.substring(0, 2) == 'en'
              ? ''
              : `${currentLang.substring(0, 2)}/`
          )
          .replace(
            '/de/',
            currentLang.substring(0, 2) == 'en'
              ? ''
              : `${currentLang.substring(0, 2)}/`
          )
          .substring(1),
      lang: currentLang.substring(0, 2),
    };

    let defaultLang = [...allHrefLangs, defaulLang].filter(
      (val) => val.lang == 'en'
    );
    const test = [...allHrefLangs, defaulLang];
    setDefaultHrefLangs(defaultLang);
    setHrefLangs(test);
  }, []);
  return (
    <Helmet htmlAttributes={{ lang: currentLang }}>
      {/* Encoding and styles */}
      <html />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={
          defaultHrefLangs &&
          defaultHrefLangs.length &&
          defaultHrefLangs[0].completePath
        }
      />
      {hrefLangs.map((val) => {
        return (
          <link
            rel="alternate"
            hrefLang={val.lang}
            href={val.completePath}
            key={val.lang}
          />
        );
      })}
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />

      {/* General meta */}

      {canonicalUrl}
      {pageTitle}
      {pageDescription}

      {/* <!-- Twitter meta --> */}
      <meta content="summary" name="twitter:card" />
      <meta content={opengraphTitle} name="twitter:title" />
      <meta content={opengraphDescription} name="twitter:description" />
      <meta content={`${url}images/meta/tile.png`} name="twitter:image" />
      <meta content={opengraphUrl} name="twitter:url" />

      {/* <!-- Facebook meta --> */}
      <meta content={url} property="og:site_name" />
      <meta content={opengraphTitle} property="og:title" />
      <meta content={opengraphDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={`${url}images/meta/tile.png`} property="og:image" />
      <meta content={opengraphUrl} property="og:url" />
      <meta property="og:locale" content="en_US" />

      {/* Specified tags */}
      {children}
    </Helmet>
  );
};

Head.defaultProps = {
  meta: {
    title: `Secure Privacy: GDPR, CCPA, LGPD & cookie compliance solution`,
    description: `Scan websites for GDPR, CCPA & cookie compliance for free. Add privacy policies & cookie banners to your website in minutes.`,
  },
};

Head.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  currentLang: PropTypes.string.isRequired,
  activeDocMeta: PropTypes.any,
  canonical: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  metatitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  metadescription: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Head;
