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
    const allHrefLangs =
      activeDocMeta &&
      activeDocMeta.alternate_languages.map((val) => {
        const completePath = url + location.pathname;
        var myRegexp = /^(.*\/)/g;
        var match = myRegexp.exec(completePath);

        const completPaths =
          val.type === 'homepage'
            ? completePath
            : match[1] + (val.uid ? val.uid : '');
        if (val.lang.substring(0, 2) == 'en') {
          return {
            completePath: completPaths
              .replace('/de/', '')
              .replace('/pt/', '')
              .replace('/fr/', '')
              .replace('.ai//', '.ai/'),
            lang: val.lang.substring(0, 2),
          };
        }
        if (val.lang.substring(0, 2) == 'pt') {
          return {
            completePath: completPaths
              .replace('.ai//', '.ai/pt/')
              .replace('/de/', 'pt/')
              .replace('/fr/', 'pt/')
              .replace('ptpt', 'pt'),
            lang: val.lang.substring(0, 2),
          };
        }
        if (val.lang.substring(0, 2) == 'de') {
          return {
            completePath: completPaths
              .replace('.ai//', '.ai/de/')
              .replace('/pt/', 'de/')
              .replace('/fr/', 'de/')
              .replace('dede', 'de'),
            lang: val.lang.substring(0, 2),
          };
        }

        if (val.lang.substring(0, 2) == 'fr') {
          return {
            completePath: completPaths
              .replace('.ai//', '.ai/fr/')
              .replace('/pt/', 'fr/')
              .replace('/de/', 'fr/')
              .replace('frfr', 'fr'),
            lang: val.lang.substring(0, 2),
          };
        }
      });

    const completePath = url + location.pathname;
    const defaulLang = {
      completePath: completePath
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
        .replace(
          '/fr/',
          currentLang.substring(0, 2) == 'en'
            ? ''
            : `${currentLang.substring(0, 2)}/`
        )
        .replace('.ai//', '.ai/'),
      lang: currentLang.substring(0, 2),
    };
    let defaultLang;
    if (allHrefLangs) {
      defaultLang = [...allHrefLangs, defaulLang].filter(
        (val) => val && val.lang == 'en'
      );
    }
    if (!allHrefLangs) {
      defaultLang = defaulLang;
    }

    const hrefLangComplete = allHrefLangs
      ? [...allHrefLangs, defaulLang]
      : [defaulLang];

    setDefaultHrefLangs(defaultLang);

    setHrefLangs(hrefLangComplete);
  }, [activeDocMeta]);

  return (
    <Helmet>
      {/* Encoding and styles */}
      <html lang={currentLang.substring(0, 2)} />
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
      <meta name="title" content={opengraphTitle} />

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
      {typeof window !== 'undefined' && (
        <script
          async
          defer
          id="customfitinit"
          type="text/javascript"
          src="https://sdk.customfit.ai/4a59af50-feb5-11ec-8fd0-1773d79a51b6/cf-js-sdk-min.js"
        ></script>
      )}
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
